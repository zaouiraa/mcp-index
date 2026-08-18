import "server-only";

import { unstable_noStore as noStore } from "next/cache";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing Supabase URL environment variable.");
}

if (!supabaseKey) {
  throw new Error("Missing Supabase key environment variable.");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: {
        "x-client-info": "mcpindex-server",
      },
    },
  }
);

export type ToolFaqItem = {
  question: string;
  answer: string;
};

export type ToolComparisonItem = {
  feature: string;
  thisTool: string;
  thisOk: boolean;
  competitor: string;
  competitorOk: boolean;
};

export type ToolCompatibility = {
  claude_desktop?: boolean;
  cursor?: boolean;
  vscode?: boolean;
  notes?: string;
  [key: string]: unknown;
};

export type ToolProsConsBlock = {
  type: "pros_cons";
  title: string;
  items: {
    strength: string;
    limitation: string;
  }[];
};

export type ToolFaqBlock = {
  type: "faq";
  title: string;
  items: ToolFaqItem[];
};

export type ToolContentBlock =
  | ToolProsConsBlock
  | ToolFaqBlock;

export type ToolRow = {
  slug: string;
  name: string;
  short_description: string;
  answer_first_summary: string;
  developer: string;
  github_url: string;
  npm_package: string | null;
  license: string;
  is_free: boolean;
  category: string;
  tags: string[];
  config_json: string;
  setup_steps: string[];
  faq: ToolFaqItem[];
  comparisons: ToolComparisonItem[];
  installs: string;

  editor_assessment?: string | null;
  best_for?: string[] | null;
  limitations?: string[] | null;
  related_tool_slugs?: string[] | null;
  compatibility?: ToolCompatibility | null;
  content_blocks?: ToolContentBlock[] | null;

  review_status?: string | null;
  reviewed_at?: string | null;
  status?: string | null;
  is_visible?: boolean | null;

  github_status?: string | null;
  last_updated?: string | null;
  last_github_check_at?: string | null;
};

export type SitemapTool = {
  slug: string;
  category: string | null;
  last_updated: string | null;
};

const PUBLISHED_STATUS = "active";
const PUBLISHED_REVIEW_STATUS = "reviewed";

function markNoStore(): void {
  noStore();
}

function normalizeTool(
  tool: Partial<ToolRow>
): ToolRow {
  return {
    slug: tool.slug ?? "",
    name: tool.name ?? "",
    short_description: tool.short_description ?? "",
    answer_first_summary:
      tool.answer_first_summary ?? "",
    developer: tool.developer ?? "",
    github_url: tool.github_url ?? "",
    npm_package: tool.npm_package ?? null,
    license: tool.license ?? "MIT",
    is_free: tool.is_free ?? true,
    category: tool.category ?? "",
    tags: Array.isArray(tool.tags)
      ? tool.tags
      : [],
    config_json: tool.config_json ?? "",
    setup_steps: Array.isArray(tool.setup_steps)
      ? tool.setup_steps
      : [],
    faq: Array.isArray(tool.faq)
      ? tool.faq
      : [],
    comparisons: Array.isArray(tool.comparisons)
      ? tool.comparisons
      : [],
    installs: tool.installs ?? "0",

    editor_assessment:
      tool.editor_assessment ?? null,
    best_for: Array.isArray(tool.best_for)
      ? tool.best_for
      : [],
    limitations: Array.isArray(tool.limitations)
      ? tool.limitations
      : [],
    related_tool_slugs: Array.isArray(
      tool.related_tool_slugs
    )
      ? tool.related_tool_slugs
      : [],
    compatibility: tool.compatibility ?? null,
    content_blocks: Array.isArray(
      tool.content_blocks
    )
      ? tool.content_blocks
      : [],

    review_status:
      tool.review_status ?? "draft",
    reviewed_at: tool.reviewed_at ?? null,
    status: tool.status ?? "active",
    is_visible: tool.is_visible ?? true,

    github_status:
      tool.github_status ?? null,
    last_updated:
      tool.last_updated ?? null,
    last_github_check_at:
      tool.last_github_check_at ?? null,
  };
}

function throwSupabaseError(
  operation: string,
  error: {
    message: string;
    code?: string;
    details?: string;
    hint?: string;
  }
): never {
  console.error(
    `[supabase] ${operation} failed`,
    error
  );

  throw new Error(
    `[supabase] ${operation} failed: ${error.message}${
      error.code
        ? ` (${error.code})`
        : ""
    }`
  );
}

function publishedToolsQuery() {
  return supabase
    .from("tools")
    .select("*")
    .eq("review_status", PUBLISHED_REVIEW_STATUS)
    .eq("is_visible", true)
    .eq("status", PUBLISHED_STATUS);
}

export async function getAllTools(): Promise<ToolRow[]> {
  markNoStore();

  const { data, error } =
    await publishedToolsQuery()
      .order("last_updated", {
        ascending: false,
        nullsFirst: false,
      })
      .order("name", {
        ascending: true,
        nullsFirst: false,
      });

  if (error) {
    throwSupabaseError("getAllTools", error);
  }

  console.log(
    `[supabase] getAllTools returned ${
      data?.length ?? 0
    } tools`
  );

  return (data ?? []).map(normalizeTool);
}

export async function getSitemapTools(): Promise<
  SitemapTool[]
> {
  markNoStore();

  const { data, error } = await supabase
    .from("tools")
    .select(
      "slug, category, last_updated"
    )
    .eq("review_status", PUBLISHED_REVIEW_STATUS)
    .eq("is_visible", true)
    .eq("status", PUBLISHED_STATUS)
    .not("slug", "is", null)
    .order("slug", {
      ascending: true,
    });

  if (error) {
    throwSupabaseError(
      "getSitemapTools",
      error
    );
  }

  const tools = (data ?? []).filter(
    (
      tool
    ): tool is SitemapTool =>
      typeof tool.slug === "string" &&
      tool.slug.trim().length > 0
  );

  console.log(
    `[supabase] getSitemapTools returned ${
      tools.length
    } tools`
  );

  return tools;
}

export async function getToolBySlug(
  slug: string
): Promise<ToolRow | null> {
  markNoStore();

  const normalizedSlug = slug.trim();

  if (!normalizedSlug) {
    return null;
  }

  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", normalizedSlug)
    .eq("review_status", PUBLISHED_REVIEW_STATUS)
    .eq("is_visible", true)
    .eq("status", PUBLISHED_STATUS)
    .maybeSingle();

  if (error) {
    throwSupabaseError(
      "getToolBySlug",
      error
    );
  }

  return data
    ? normalizeTool(data)
    : null;
}

export async function getAllSlugs(): Promise<
  string[]
> {
  markNoStore();

  const { data, error } = await supabase
    .from("tools")
    .select("slug")
    .eq("review_status", PUBLISHED_REVIEW_STATUS)
    .eq("is_visible", true)
    .eq("status", PUBLISHED_STATUS)
    .not("slug", "is", null)
    .order("slug", {
      ascending: true,
    });

  if (error) {
    throwSupabaseError(
      "getAllSlugs",
      error
    );
  }

  return (data ?? [])
    .map((item) => item.slug)
    .filter(
      (
        slug
      ): slug is string =>
        typeof slug === "string" &&
        slug.trim().length > 0
    );
}

export async function getToolsByCategory(
  category: string
): Promise<ToolRow[]> {
  markNoStore();

  const normalizedCategory =
    category.trim();

  if (!normalizedCategory) {
    return [];
  }

  const { data, error } =
    await publishedToolsQuery()
      .ilike("category", normalizedCategory)
      .order("name", {
        ascending: true,
        nullsFirst: false,
      });

  if (error) {
    throwSupabaseError(
      "getToolsByCategory",
      error
    );
  }

  return (data ?? []).map(normalizeTool);
}

export async function getToolsBySlugs(
  slugs: string[]
): Promise<ToolRow[]> {
  markNoStore();

  const normalizedSlugs =
    Array.from(
      new Set(
        slugs
          .map((slug) => slug.trim())
          .filter(Boolean)
      )
    );

  if (!normalizedSlugs.length) {
    return [];
  }

  const { data, error } =
    await publishedToolsQuery()
      .in("slug", normalizedSlugs)
      .order("name", {
        ascending: true,
        nullsFirst: false,
      });

  if (error) {
    throwSupabaseError(
      "getToolsBySlugs",
      error
    );
  }

  return (data ?? []).map(normalizeTool);
}

export async function getPublishedToolCount(): Promise<number> {
  markNoStore();

  const { count, error } = await supabase
    .from("tools")
    .select("slug", {
      count: "exact",
      head: true,
    })
    .eq("review_status", PUBLISHED_REVIEW_STATUS)
    .eq("is_visible", true)
    .eq("status", PUBLISHED_STATUS);

  if (error) {
    throwSupabaseError(
      "getPublishedToolCount",
      error
    );
  }

  return count ?? 0;
}

export async function addTool(
  tool: ToolRow
) {
  markNoStore();

  const payload = normalizeTool(tool);

  const { data, error } = await supabase
    .from("tools")
    .insert(payload)
    .select()
    .single();

  if (error) {
    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data: normalizeTool(data),
    error: null,
  };
}

export async function upsertTool(
  tool: ToolRow
) {
  markNoStore();

  const payload = normalizeTool(tool);

  const { data, error } = await supabase
    .from("tools")
    .upsert(payload, {
      onConflict: "slug",
    })
    .select()
    .single();

  if (error) {
    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data: normalizeTool(data),
    error: null,
  };
}

export async function deleteTool(
  slug: string
) {
  markNoStore();

  const normalizedSlug =
    slug.trim();

  if (!normalizedSlug) {
    return {
      error: "Slug is required.",
    };
  }

  const { error } = await supabase
    .from("tools")
    .delete()
    .eq("slug", normalizedSlug);

  return {
    error: error?.message ?? null,
  };
}
