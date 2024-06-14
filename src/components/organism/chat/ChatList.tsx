import React from "react";
import styles from "@/styles/organism/chat.module.scss";
import { truncateText } from "@/utils/common/truncateText";
import { convertUToKST } from "@/utils/common/convertUToKST";

interface ChatListProps {
  thumbnail?: any;
  title?: any;
  updatedAt?: any;
}

export default function ChatList({
  thumbnail,
  title,
  updatedAt,
}: ChatListProps) {
  return (
    <div className={styles["chatListContainer"]}>
      <div className={styles["thumbnail"]}>
        <img src={thumbnail} />
      </div>
      <div className={styles["textContainer"]}>
        <p className={styles["title"]}>{truncateText(title, 13)}</p>
        <p className={styles["subtitle"]}>마지막 채팅 내용</p>
      </div>
      <div className={styles["updatedAt"]}>{convertUToKST(updatedAt)}</div>
    </div>
  );
}
