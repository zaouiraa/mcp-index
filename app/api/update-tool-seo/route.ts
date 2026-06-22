import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error("Missing Supabase env vars")
  }

  return createClient(url, serviceRoleKey)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { slug, short_description, answer_first_summary, setup_steps, faq } = body

    if (!slug) {
      return NextResponse.json({ error: "slug is required" }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from("tools")
      .update({
        short_description,
        answer_first_summary,
        setup_steps,
        faq,
      })
      .eq("slug", slug)
      .select()

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
          details: error,
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        updated: data,
      },
      { status: 200 }
    )
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unexpected error"

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    )
  }
}
