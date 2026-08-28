import { NextResponse } from "next/server";
import DBconnect from "../Db/DBconnect.js";
import ServiceEnquiry from "../model/serviceEnquiry.model";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const plan = String(body.plan || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { message: "Name, email, phone and service are required" },
        { status: 400 }
      );
    }

    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { message: "Please enter a valid email" },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { message: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    await DBconnect();

    const enquiry = await ServiceEnquiry.create({
      name,
      email,
      phone,
      service,
      plan,
      message,
    });

    return NextResponse.json(
      { message: "Thanks! We will get back to you soon.", enquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Service enquiry failed:", error);
    return NextResponse.json(
      { message: "Could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await DBconnect();

    const enquiries = await ServiceEnquiry.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({ enquiries }, { status: 200 });
  } catch (error) {
    console.error("Could not read service enquiries:", error);
    return NextResponse.json(
      { message: "Could not read enquiries" },
      { status: 500 }
    );
  }
}
