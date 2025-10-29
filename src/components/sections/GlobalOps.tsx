import React from "react";
import Image from "next/image";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";

const GlobalOps = () => {
  const items = [
    // {
    //   title: "Tyler Durden",
    //   image:
    //     "https://images.unsplash.com/photo-1732310216648-603c0255c000?auto=format&fit=crop&w=320&q=80",
    //   className: "absolute top-10 left-[20%] rotate-[-5deg]",
    // },
    {
      title: "Italy",
      image:
        "https://images.unsplash.com/photo-1583855282680-6dbdc69b0932?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Dhaka",
      image:
        "https://images.pexels.com/photos/30773945/pexels-photo-30773945.jpeg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.pexels.com/photos/962925/pexels-photo-962925.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Germany",
      image:
        "https://images.unsplash.com/photo-1604854577019-d96a524e60c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "USA",
      image:
        "https://images.pexels.com/photos/34461542/pexels-photo-34461542.jpeg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.pexels.com/photos/3656756/pexels-photo-3656756.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <section className="w-full bg-gray-50 text-gray-900 py-12 md:py-24">
      <div className="w-full md:w-10/12 mx-auto px-4 text-center mb-12">
        <h3 className="text-sm uppercase tracking-widest text-purple-500 font-black mb-2">
          We Have
        </h3>
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Global Operations
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Easy Pay operates from multiple global offices, enabling fast, secure, and compliant
          payment solutions for businesses and customers around the world.
        </p>
      </div>

      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          Easy Pay operates from multiple global offices, enabling seamless payment solutions across continents.       </p>
        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={320}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-md aspect-square"
              unoptimized
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
};

export default GlobalOps;
