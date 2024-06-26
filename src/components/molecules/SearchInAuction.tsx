"use client";

import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../atoms/input/SearchInput";
import Alarm from "../atoms/icon/Alarm";
import Link from "next/link";
import BackBtn from "../atoms/button/BackBtn";
import Image from "next/image";
import Cookies from "js-cookie";
import { FaSearch } from "react-icons/fa";
import styles from "@/styles/layout/header.module.scss";
import Logo from "@/asset/svgs/Logo";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { sessionValid } from "@/utils/session/sessionValid";

export default function SearchInAuction() {
  const eventSource = useRef<null | EventSource>(null);

  useEffect(() => {
    const checkSessionAndFetchSSE = async () => {
      const session = await sessionValid();

      if (session) {
        const fetchSSE = () => {
          eventSource.current = new EventSourcePolyfill(
            `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/notification-service/api/v1/alarm/stream-notifications`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${session.authorization}`,
                uuid: `${session.uuid}`,
              },
            }
          );

          eventSource.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);
          };

          eventSource.current.onerror = () => {
            console.log("에러");
            eventSource.current?.close();
            setTimeout(fetchSSE, 3000);
          };

          eventSource.current.onopen = (event) => {
            console.log("onopen");
            console.log("연결 성공:", event);
          };
        };

        fetchSSE();
      }
      console.log("안녕");
    };

    checkSessionAndFetchSSE();

    return () => {
      eventSource.current?.close();
    };
  }, []);

  return (
    <>
      <Logo />
      <div className={styles["header-element-container"]}>
        <Link href="/search">
          <IoSearchOutline size={30} />
        </Link>
        <GoBell size={30} />
      </div>
    </>
  );
}
