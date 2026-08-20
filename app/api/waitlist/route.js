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

    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/waitlist`,
      {
        method: "POST",
        headers: {
          apikey: process.env.SUPABASE_SECRET_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      }
    );

    if (response.status === 409) {
      return NextResponse.json(
        {
          success: true,
          duplicate: true,
          message: "이미 등록된 이메일입니다.",
        },
        { status: 200 }
      );
    }

    if (!response.ok) {
      const error = await response.text();
      console.error("Supabase error:", error);

      return NextResponse.json(
        { message: "등록 중 문제가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        duplicate: false,
        message: "등록되었습니다. 감사합니다.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
