
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { image: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone children once for looping effect
    const children = Array.from(scroller.children);
    children.forEach((child) => {
      scroller.appendChild(child.cloneNode(true));
    });

    getDirection();
    getSpeed();
    setStart(true);

    // Cleanup on unmount to prevent memory leaks
    return () => {
      if (scroller) {
        // remove duplicated children
        while (scroller.children.length > children.length) {
          scroller.removeChild(scroller.lastChild!);
        }
      }
    };
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-10 overflow-hidden w-full h-30 sm:h-48 md:h-40 flex items-center bg-white",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        "[mask-repeat:no-repeat] [mask-size:cover]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-12 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[200px] shrink-0 flex justify-center items-center"
          >
            <Image
              src={item.image}
              alt={`Image ${idx + 1}`}
              width={180}
              height={30}
              className="object-contain rounded-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};





// "use client";

// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     image: string;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     addAnimation();
//   }, []);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       // Duplicate items for infinite loop
//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-direction",
//         direction === "left" ? "forwards" : "reverse"
//       );
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex w-max min-w-full shrink-0 flex-nowrap gap-18 py-4",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             key={idx}
//             className="relative w-[200px] max-w-full shrink-0 rounded-xl"


//           >
//             <Image
//               src={item.image}
//               alt={`Image ${idx + 1}`}
//               width={180}
//               height={30}
//               className="w-[180px] h-auto object-contain rounded-lg mx-auto"
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

