import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["name","email","phone","description"];
    if (required.some((key) => !body[key])) {
      return NextResponse.json({message:"Please complete all required fields."},{status:400});
    }

    // Production step: connect this route to Supabase and email notifications.
    const enquiryId = `TTS-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      message:`Thank you for contacting Tamizha Tech Solution. Your enquiry ID is ${enquiryId}. Our team will get back to you soon.`,
      enquiryId
    });
  } catch {
    return NextResponse.json({message:"Unable to submit your enquiry right now. Please contact us directly at tamizharasan740@gmail.com."},{status:500});
  }
}