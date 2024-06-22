import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/organism/layout/NavBar";
import AuthSession from "@/AuthSession";
import RQProvider from "./RQProvider";
import { useDarkMode } from "@/hooks/common/checkDarkMode";
import { cookies } from "next/headers";

//뷰포트 수정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  //메타랑 오지
  manifest: "/manifest.json",
  title: "Create Next App",
  description: "Generated by create next app",
};
const noto = Noto_Sans_KR({
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const mode = cookies().get("mode")?.value;

  return (
    <html lang="en">
      <body className={noto.className}>
        <AuthSession>
          <RQProvider>{children}</RQProvider>
        </AuthSession>
      </body>
    </html>
  );
}
