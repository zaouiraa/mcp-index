import "server-only";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

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
  status?: string | null;
  github_status?: string | null;
  last_updated?: string | null;
  last_github_check_at?: string | null;
};

function normalizeTool(tool: Partial<ToolRow>): ToolRow {
  return {
    slug: tool.slug || "",
    name: tool.name || "",
    short_description: tool.short_description || "",
    answer_first_summary: tool.answer_first_summary || "",
    developer: tool.developer || "",
    github_url: tool.github_url || "",
    npm_package: tool.npm_package || null,
    license: tool.license || "MIT",
    is_free: tool.is_free ?? true,
    category: tool.category || "",
    tags: Array.isArray(tool.tags) ? tool.tags : [],
    config_json: tool.config_json || "",
    setup_steps: Array.isArray(tool.setup_steps) ? tool.setup_steps : [],
    faq: Array.isArray(tool.faq) ? tool.faq : [],
    comparisons: Array.isArray(tool.comparisons) ? tool.comparisons : [],
    installs: tool.installs || "0",
    status: tool.status ?? "active",
    github_status: tool.github_status ?? null,
    last_updated: tool.last_updated ?? null,
    last_github_check_at: tool.last_github_check_at ?? null,
  };
}

export async function getAllTools(): Promise<ToolRow[]> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("[supabase] getAllTools error:", error.message);
    return [];
  }

  return (data ?? []).map(normalizeTool);
}

export async function getToolBySlug(slug: string): Promise<ToolRow | null> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("[supabase] getToolBySlug error:", error.message);
    return null;
  }

  return data ? normalizeTool(data) : null;
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("tools")
    .select("slug")
    .not("slug", "is", null);

  if (error) {
    console.error("[supabase] getAllSlugs error:", error.message);
    return [];
  }

  return (data ?? []).map((item) => item.slug as string);
}

export async function getToolsByCategory(category: string): Promise<ToolRow[]> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .ilike("category", category)
    .order("name", { ascending: true });

  if (error) {
    console.error("[supabase] getToolsByCategory error:", error.message);
    return [];
  }

  return (data ?? []).map(normalizeTool);
}

export async function addTool(tool: ToolRow) {
  const payload = normalizeTool(tool);

  const { data, error } = await supabase
    .from("tools")
    .insert(payload)
    .select()
    .single();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: normalizeTool(data), error: null };
}

export async function upsertTool(tool: ToolRow) {
  const payload = normalizeTool(tool);

  const { data, error } = await supabase
    .from("tools")
    .upsert(payload, { onConflict: "slug" })
    .select()
    .single();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: normalizeTool(data), error: null };
}

export async function deleteTool(slug: string) {
  const { error } = await supabase
    .from("tools")
    .delete()
    .eq("slug", slug);

  return { error: error?.message ?? null };
}
