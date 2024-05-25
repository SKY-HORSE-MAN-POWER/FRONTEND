import Image from "next/image";

import BoardDetail from "@/components/organism/boardDetail/BoardDetail";
import BoardDetailBar from "@/components/organism/layout/BoardDetailBar";
import BoardDetailInfo from "@/components/organism/boardDetail/BoardDetailInfo";
import Footer from "@/components/organism/layout/Footer";

export default function Page() {
  return (
    <main>
      <BoardDetail
        title="마감시간"
        detail="마감시간 이후, 최고 금액의 입찰자와 매칭이 됩니다."
        detailDate="9999.99.99"
        deadLine="7"
        category="세무·법무·노무 / 최소 경매가"
        price="99,999"
        boardTitle="G사 CTO 멘토링"
        boardContent="시니어 경력 17년차 프론트엔드 입니다. 리엑트를 기반으로 웹개발을
        진행하며 멘토링 및 취업 전략 강의 6년차 입니다. 많은 수료생을 배출
        했으며, 1개월안에 취업 보장합니다."
      />
      <BoardDetailInfo />
      <Footer />
      <BoardDetailBar />
    </main>
  );
}