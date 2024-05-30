"use server";

import { auth } from "@/auth";
import { cookies } from "next/headers";

interface toggleValidProps {
  auctionUuid?: string;
}

export async function toggleValid(auctionUuid: toggleValidProps) {
  const session = await auth();
  if (!session) {
    return "실패(세션없음)";
  }

  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;

  // console.log(auctionUuid, authorization, uuid);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/member-service/api/v1/authorization/subscription/auction`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authorization}`,
          uuid: `${uuid}`,
        },
        body: JSON.stringify({
          auctionUuid: auctionUuid.auctionUuid,
        }),
      }
    );

    if (res.ok) {
      return "성공";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
