import { NextResponse } from "next/server";

import { apiURL } from "@/constants/apiURL";
import { Errors } from "@/constants/errors";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = searchParams.toString();

  try {
    const res = await fetch(`${apiURL}?${params}`);
    if (!res.ok) {
      return NextResponse.json(
        { message: Errors.FAILED_TO_FETCH },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error, 'error');
    return NextResponse.json(
      { message: Errors.INTERNAL_SERVER_ERROR },
      { status: 500 },
    );
  }
}
