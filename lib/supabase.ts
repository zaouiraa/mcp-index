import { createClient } from "@supabase/supabase-js";
import { getAllSlugs as getStaticSlugs, getToolBySlug as getStaticTool } from "@/lib/tools-data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabaseClient: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

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

function toDBTool(tool: {
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
}): DBTool {
  return {
    id: 0,
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

export async function getToolBySlug(slug: string): Promise<DBTool | null> {
  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("tools")
      .select("*")
      .eq("slug", slug)
      .single();

    if (!error && data) return data as DBTool;
  }

  const staticTool = getStaticTool(slug);
  if (staticTool) return toDBTool(staticTool);
  return null;
}

export async function getAllSlugs(): Promise<string[]> {
  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("tools")
      .select("slug");

    if (!error && data) {
      return data.map((t: { slug: string }) => t.slug);
    }
  }

  return getStaticSlugs();
}
