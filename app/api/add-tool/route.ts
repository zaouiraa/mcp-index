import { NextResponse } from "next/server";
import { addTool, type ToolRow } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ToolRow;

    if (!body.slug || !body.name || !body.github_url || !body.category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload: ToolRow = {
      slug: body.slug,
      name: body.name,
      short_description: body.short_description,
      answer_first_summary: body.answer_first_summary,
      developer: body.developer,
      github_url: body.github_url,
      npm_package: body.npm_package,
      license: body.license,
      is_free: body.is_free,
      category: body.category,
      tags: body.tags ?? [],
      config_json: body.config_json,
      setup_steps: body.setup_steps ?? [],
      faq: body.faq ?? [],
      comparisons: body.comparisons ?? [],
      installs: body.installs ?? "0",
      status: body.status ?? "active",
      github_status: body.github_status ?? null,
      last_updated: body.last_updated ?? null,
      last_github_check_at: body.last_github_check_at ?? null,
    };

    const result = await addTool(payload);

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Tool added successfully",
        data: result.data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[api/add-tool] POST error:", error);

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
