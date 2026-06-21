import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const body = await request.json()

    const { error } = await supabase.from("tools").insert({
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
      tags: body.tags,
      config_json: body.config_json,
      setup_steps: body.setup_steps,
      faq: body.faq,
      comparisons: [],
      installs: body.installs,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
