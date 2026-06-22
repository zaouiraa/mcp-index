import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolComparison = {
  feature: string;
  thisTool: string;
  thisOk: boolean;
  competitor: string;
  competitorOk: boolean;
};

export type ToolRow = {
  id?: string;
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
  faq: ToolFaq[];
  comparisons: ToolComparison[];
  installs: string;
  status?: string | null;
  github_status?: string | null;
  last_updated?: string | null;
  last_github_check_at?: string | null;
  created_at?: string | null;
};

export async function getAllTools(): Promise<ToolRow[]> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[supabase] getAllTools error:", error);
    return [];
  }

  return data ?? [];
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from("tools").select("slug");

  if (error) {
    console.error("[supabase] getAllSlugs error:", error);
    return [];
  }

  return (data ?? []).map((item) => item.slug);
}

export async function getToolBySlug(slug: string): Promise<ToolRow | null> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("[supabase] getToolBySlug error:", error);
    return null;
  }

  return data;
}

export async function addTool(
  tool: ToolRow
): Promise<{ data: ToolRow | null; error: string | null }> {
  const { data, error } = await supabase
    .from("tools")
    .insert(tool)
    .select()
    .single();

  if (error) {
    console.error("[supabase] addTool error:", error);
    return { data: null, error: error.message };
  }

  return { data, error: null };
}
