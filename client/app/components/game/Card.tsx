import bCard from "@/public/assets/images/games.svg";
import { CardProps } from "@/utils/types";
import Image from "next/image";
import styles from "./style.module.scss";

function Card({
  card,
  onClick,
}: {
  card: CardProps;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={`${styles.memoryCard} ${card.isFlipped ? styles.flip : ""}`}
      onClick={onClick}
      style={{ order: card.order }}
    >
      <Image
        className={styles.frontFace}
        width={50}
        height={100}
        src={card.image}
        alt="Card"
      />
      <Image
        className={styles.backFace}
        width={50}
        height={100}
        src={bCard}
        alt="BCard"
      />
    </div>
  );
}

export default Card;
