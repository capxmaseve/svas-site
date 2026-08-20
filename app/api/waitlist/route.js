import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    const cleanEmail =
      typeof email === "string"
        ? email.trim().toLowerCase()
        : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { message: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Supabase environment variables are missing.");

      return NextResponse.json(
        { message: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/waitlist`,
      {
        method: "POST",
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: "등록되었습니다." },
        { status: 200 }
      );
    }

    const errorText = await response.text();

    console.error("Supabase error:", response.status, errorText);

    if (
      response.status === 409 ||
      errorText.includes("duplicate key")
    ) {
      return NextResponse.json(
        { message: "이미 등록된 이메일입니다." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "등록 중 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      { message: "등록 중 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
