// components/IonicCards.jsx
import Image from "next/image";

const cards = [
  {
    title: "Ionic Native",
    description:
      "A curated set of ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.",
    img: "https://ionicframework.com/img/getting-started/ionic-native-card.png",
  },
  {
    title: "UI Components",
    description:
      "Tabs, buttons, inputs, lists, cards, and more! A comprehensive library of mobile UI components, ready to go.",
    img: "https://ionicframework.com/img/getting-started/components-card.png",
  },
  {
    title: "Theming",
    description:
      "Learn how to easily customize and modify your app’s design to fit your brand across all mobile platforms.",
    img: "https://ionicframework.com/img/getting-started/theming-card.png",
  },
];

export default function IonicCards() {
  return (
    <section className="py-20 px-4 bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative bg-white rounded-lg shadow-md p-6 sm:p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
            <p className="text-gray-500 mt-2">{card.description}</p>

            {/* Right-side image */}
            <div className="absolute top-4 right-4">
              <Image src={card.img} alt={card.title} width={80} height={80} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
