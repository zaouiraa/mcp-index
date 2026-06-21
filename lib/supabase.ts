export async function getAllTools(): Promise<DBTool[]> {
  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("tools")
      .select("*")
      .order("id", { ascending: true });

    if (!error && data) return data as DBTool[];
  }

  const staticTools = getStaticSlugs().map(slug => {
    const tool = getStaticTool(slug);
    return tool ? toDBTool(tool) : null;
  }).filter(Boolean) as DBTool[];

  return staticTools;
}
