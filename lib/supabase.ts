import { createClient } from "@supabase/supabase-js";
import {
  getAllSlugs as getStaticSlugs,
  getToolBySlug as getStaticTool,
} from "@/lib/tools-data";

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const supabaseClient = getSupabaseClient();

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DBTool {
  id: number;
  slug: string;
  name: string;
  short_description: string;
  answer_first_summary: string;
  developer: string;
  github_url: string;
  npm_package: string;
  license: string;
  is_free: boolean;
  category: string;
  tags: string[];
  config_json: string;
  setup_steps: string[];
  faq: { question: string; answer: string }[];
  comparisons: {
    feature: string;
    thisTool: string;
    competitor: string;
    thisOk: boolean;
    competitorOk: boolean;
  }[];
  last_updated: string;
  installs: string;
  created_at: string;
}

// Fields expected from the static data source (camelCase convention)
type StaticToolInput = {
  slug: string;
  name: string;
  shortDescription: string;
  answerFirstSummary: string;
  developer: string;
  githubUrl: string;
  npmPackage: string;
  license: string;
  isFree: boolean;
  category: string;
  tags: string[];
  configJson: string;
  setupSteps: string[];
  faq: { question: string; answer: string }[];
  comparisons: {
    feature: string;
    thisTool: string;
    competitor: string;
    thisOk: boolean;
    competitorOk: boolean;
  }[];
  lastUpdated: string;
  installs: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Maps a camelCase static tool to the snake_case DBTool shape.
 * id = -1 signals "static origin, not persisted in DB".
 */
function toDBTool(tool: StaticToolInput): DBTool {
  return {
    id: -1,
    slug: tool.slug,
    name: tool.name,
    short_description: tool.shortDescription,
    answer_first_summary: tool.answerFirstSummary,
    developer: tool.developer,
    github_url: tool.githubUrl,
    npm_package: tool.npmPackage,
    license: tool.license,
    is_free: tool.isFree,
    category: tool.category,
    tags: tool.tags,
    config_json: tool.configJson,
    setup_steps: tool.setupSteps,
    faq: tool.faq,
    comparisons: tool.comparisons,
    last_updated: tool.lastUpdated,
    installs: tool.installs,
    created_at: "",
  };
}

/**
 * Runs a Supabase query with a timeout.
 * Falls back gracefully if the network is slow or unavailable.
 */
async function withTimeout<T>(
  promise: Promise<T>,
  ms = 3000,
  label = "supabase"
): Promise<T | null> {
  let timer: ReturnType<typeof setTimeout>;

  const timeout = new Promise<null>((resolve) => {
    timer = setTimeout(() => {
      console.warn(`[${label}] query timed out after ${ms}ms`);
      resolve(null);
    }, ms);
  });

  const result = await Promise.race([promise, timeout]);
  clearTimeout(timer!);
  return result;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getToolBySlug(slug: string): Promise<DBTool | null> {
  if (supabaseClient) {
    const result = await withTimeout(
      supabaseClient.from("tools").select("*").eq("slug", slug).single(),
      3000,
      "getToolBySlug"
    );

    if (result) {
      const { data, error } = result;
      if (error) console.warn("[supabase] getToolBySlug error:", error.message);
      if (data) return data as DBTool;
    }
  }

  const staticTool = getStaticTool(slug);
  return staticTool ? toDBTool(staticTool) : null;
}

export async function getAllSlugs(): Promise<string[]> {
  if (supabaseClient) {
    const result = await withTimeout(
      supabaseClient.from("tools").select("slug"),
      3000,
      "getAllSlugs"
    );

    if (result) {
      const { data, error } = result;
      if (error) console.warn("[supabase] getAllSlugs error:", error.message);
      if (data) return data.map((t: { slug: string }) => t.slug);
    }
  }

  return getStaticSlugs();
}

export async function getAllTools(): Promise<DBTool[]> {
  if (supabaseClient) {
    const result = await withTimeout(
      supabaseClient.from("tools").select("*").order("id", { ascending: true }),
      3000,
      "getAllTools"
    );

    if (result) {
      const { data, error } = result;
      if (error) console.warn("[supabase] getAllTools error:", error.message);
      if (data) return data as DBTool[];
    }
  }

  return getStaticSlugs()
    .map((slug) => {
      const tool = getStaticTool(slug);
      return tool ? toDBTool(tool) : null;
    })
    .filter((t): t is DBTool => t !== null);
}
