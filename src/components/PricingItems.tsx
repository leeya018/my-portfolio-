import Image from "next/image";
import React, { useState } from "react";

// components/PricingCard.tsx
interface PricingCardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  image: string;
  chosenId: string;
  handleChosen: any;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  title,
  price,
  description,
  features,
  isPopular,
  image,
  handleChosen,
  chosenId,
}) => {
  return (
    <div
      className={`cursor-pointer max-w-sm rounded overflow-hidden shadow-lg   ${
        id === chosenId ? "border-2 border-black" : "border-none"
      } p-6 m-4`}
      onClick={() => handleChosen(id)}
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt="Picture of the author"
        className="flex-1 rounded-md shadow-xl w-44 h-44 mx-auto"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex items-center justify-between ">
          <div>{title}</div>
          {isPopular && (
            <span className="px-3 py-1  font-semibold  text-sm border-2 rounded-md border-blue-500 text-blue-500  ">
              MOST POPULAR
            </span>
          )}
        </div>
        <p className="text-lg">{price}/mo</p>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="list-disc ml-4 mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function PricingItems() {
  const [chosenId, setChosenId] = useState<string>("2");

  const plans = [
    {
      id: "1",
      title: "Basic",
      price: "$29",
      description:
        "Everything you need to get started with finding new winning products",
      features: [
        "20 Searches / Day",
        "10,000 Credits / Month",
        "20 Products Tracking",
      ],
      isPopular: false,
      image:
        "https://images.pexels.com/photos/15569419/pexels-photo-15569419/free-photo-of-coffee-in-glass-and-doll-on-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      title: "Standard",
      price: "$49",
      description:
        "The most popular plan if you are serious about getting started",
      features: [
        "Unlimited Searches",
        "25,000 Credits / Month",
        "50 Products Tracking",
      ],
      isPopular: true,
      image:
        "https://images.pexels.com/photos/15569419/pexels-photo-15569419/free-photo-of-coffee-in-glass-and-doll-on-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      title: "Premium",
      price: "$79",
      description: "The biggest plan to maximize your potential of success",
      features: [
        "Unlimited Searches",
        "50,000 Credits / Month",
        "100 Products Tracking",
      ],
      isPopular: false,
      image:
        "https://images.pexels.com/photos/15569419/pexels-photo-15569419/free-photo-of-coffee-in-glass-and-doll-on-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const handleChosen = (id: string) => {
    setChosenId(id);
  };
  return (
    <div className="flex justify-center items-center flex-wrap">
      {plans.map((plan) => (
        <PricingCard
          key={plan.title}
          {...plan}
          handleChosen={handleChosen}
          chosenId={chosenId}
        />
      ))}
    </div>
  );
}
