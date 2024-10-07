"use client";
import React, { useState } from "react";
import Card from "./Card";
import { CardProps } from "@/utils/types";
import { cardsData } from "@/utils/data";
import style from "./style.module.scss";
import { pages } from "@/utils/data";
import { playfair } from "@/utils/fonts";
import { Toaster, toast } from "react-hot-toast";

function Game() {
  // states
  const [cardsState, setCardsState] = useState<any>(cardsData);

  // kep first card info
  const [firstCard, setFirstCard] = useState<any>(null);
  // is it first click?
  const [secondClick, setSecondClick] = useState(false);
  // set flag to wait for 1000ms
  const [wait, setWait] = useState(false);

  // functions
  const checker = async (card: CardProps) => {
    const done = cardsState.every((card: CardProps) => card.isFlipped);
    if (done) {
      toast.success("Well Done!", {
        icon: "🏆",
        duration: 4000,
      });
    }
    if (card.name === firstCard?.name) {
      card["passed"] = true;
      firstCard["passed"] = true;
      changeCardStatusHandler(card);
      changeCardStatusHandler(firstCard);
    } else {
      setWait(true);
      setTimeout(() => {
        changeCardStatusHandler(card);
        changeCardStatusHandler(firstCard);
        setWait(false);
      }, 1000);
    }
  };

  const changeCardStatusHandler = (clickedCard: CardProps) => {
    if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
    let index = cardsState.findIndex(
      (card: CardProps) => card.id === clickedCard.id
    );
    let newState = [...cardsState];
    newState.splice(index, 1, clickedCard);
    setCardsState(newState);
  };

  const handleClick = (clickedCard: CardProps) => {
    if (wait) {
      return;
    }
    if (!secondClick) {
      setFirstCard(clickedCard);
      setSecondClick(true);
      changeCardStatusHandler(clickedCard);
    } else {
      setSecondClick(false);
      changeCardStatusHandler(clickedCard);
      checker(clickedCard);
      setFirstCard(null);
    }
  };

  return (
    <>
      <div
        className={`flex justify-center p-8 text-3xl text-center ${playfair.className}`}
      >
        <Toaster />
        {pages[4].title}
      </div>
      <section className={style.memoryGame}>
        {cardsState?.map((card: CardProps) => {
          return (
            <Card key={card.id} card={card} onClick={() => handleClick(card)} />
          );
        })}
      </section>
    </>
  );
}

export default Game;
