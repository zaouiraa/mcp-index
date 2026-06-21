import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export async function getToolBySlug(slug: string): Promise<DBTool | null> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data as DBTool;
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("tools")
    .select("slug");

  if (error) return [];
  return data.map((t: { slug: string }) => t.slug);
}
