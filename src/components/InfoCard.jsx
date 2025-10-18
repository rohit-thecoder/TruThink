// components/InfoCards.jsx
import React from "react";

export default function InfoCards() {
  const cards = [
    {
      id: "storageCard",
      title: "Used space",
      cardIcon: "storage",
      data: "99/100 GB",
      hintIcon: "warning",
      cardHint: "Get more space",
      iconGradient: "linear-gradient(60deg, #5E35B1, #039BE5)",
      hintColor: "red",
    },
    {
      id: "loveCard",
      title: "Love received",
      cardIcon: "favorite",
      data: "101%",
      hintIcon: "share",
      cardHint: "Share the love ASAP =)",
      iconGradient: "linear-gradient(60deg, #F50057, #FF8A80)",
      hintColor: "blue",
    },
    {
      id: "pizzaCard",
      title: "Pizza eaten",
      cardIcon: "local_pizza",
      data: "12 pcs",
      hintIcon: "local_drink",
      cardHint: "Drink some Cola",
      iconGradient: "linear-gradient(60deg, #fb8c00, #FFCA29)",
      hintColor: "red",
    },
    {
      id: "gameCard",
      title: "Games played",
      cardIcon: "videogame_asset",
      data: "1800+ hours",
      hintIcon: "code",
      cardHint: "You better learn to code",
      iconGradient: "linear-gradient(60deg, #43A047, #FFEB3B)",
      hintColor: "green",
    },
  ];

  return (
    <section className="bg-gray-200 py-20 px-4 font-sans">
      <h1 className="text-center text-white text-4xl mb-12 drop-shadow-lg">
        Making cards...
      </h1>
      <div className="flex flex-wrap -mx-2 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className="relative w-full sm:w-1/2 lg:w-1/4 px-2 mb-8 bg-white rounded-lg shadow-md p-6"
          >
            {/* Card Icon */}
            <div
              className="absolute -top-8 left-4 w-24 h-24 rounded-[25%] flex items-center justify-center shadow-lg"
              style={{ background: card.iconGradient }}
            >
              <i className="material-icons text-5xl text-white">{card.cardIcon}</i>
            </div>

            {/* Card Title */}
            <h3 className="text-right pt-6 pr-4 text-gray-800 font-light">
              {card.title}
            </h3>

            {/* Card Data */}
            <p className="text-right pt-4 pr-4 text-2xl font-light">{card.data}</p>

            {/* Divider */}
            <hr className="my-2 w-[90%] border-gray-200 mx-auto" />

            {/* Card Hint */}
            <div className="flex items-center pl-2 pt-2 text-sm font-light">
              <i
                className="material-icons mr-2"
                style={{ color: card.hintColor }}
              >
                {card.hintIcon}
              </i>
              <a href="#" className="text-gray-600">
                {card.cardHint}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
