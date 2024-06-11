import BackHeader from "@/components/organism/layout/BackHeader";
import Footer from "@/components/organism/layout/Footer";
import BoardDetailBar from "@/components/organism/layout/BoardDetailBar";
import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      <BackHeader title="상세페이지" />
      {children}
      {modal}
    </div>
  );
}
