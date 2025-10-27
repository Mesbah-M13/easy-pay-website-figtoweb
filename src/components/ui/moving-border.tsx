// "use client";
// import React from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
// } from "motion/react";
// import { useRef } from "react";
// import { cn } from "@/lib/utils";

// export function Button({
//   borderRadius = "1.75rem",
//   children,
//   as: Component = "button",
//   containerClassName,
//   borderClassName,
//   duration,
//   className,
//   ...otherProps
// }: {
//   borderRadius?: string;
//   children: React.ReactNode;
//   as?: any;
//   containerClassName?: string;
//   borderClassName?: string;
//   duration?: number;
//   className?: string;
//   [key: string]: any;
// }) {
//   return (
//     <Component
//       className={cn(
//         "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
//         containerClassName,
//       )}
//       style={{
//         borderRadius: borderRadius,
//       }}
//       {...otherProps}
//     >
//       <div
//         className="absolute inset-0"
//         style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
//       >
//         <MovingBorder duration={duration} rx="30%" ry="30%">
//           <div
//             className={cn(
//               "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
//               borderClassName,
//             )}
//           />
//         </MovingBorder>
//       </div>

//       <div
//         className={cn(
//           "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
//           className,
//         )}
//         style={{
//           borderRadius: `calc(${borderRadius} * 0.96)`,
//         }}
//       >
//         {children}
//       </div>
//     </Component>
//   );
// }

// export const MovingBorder = ({
//   children,
//   duration = 3000,
//   rx,
//   ry,
//   ...otherProps
// }: {
//   children: React.ReactNode;
//   duration?: number;
//   rx?: string;
//   ry?: string;
//   [key: string]: any;
// }) => {
//   const pathRef = useRef<any>();
//   const progress = useMotionValue<number>(0);

//   useAnimationFrame((time) => {
//     const length = pathRef.current?.getTotalLength();
//     if (length) {
//       const pxPerMillisecond = length / duration;
//       progress.set((time * pxPerMillisecond) % length);
//     }
//   });

//   const x = useTransform(
//     progress,
//     (val) => pathRef.current?.getPointAtLength(val).x,
//   );
//   const y = useTransform(
//     progress,
//     (val) => pathRef.current?.getPointAtLength(val).y,
//   );

//   const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//         className="absolute h-full w-full"
//         width="100%"
//         height="100%"
//         {...otherProps}
//       >
//         <rect
//           fill="none"
//           width="100%"
//           height="100%"
//           rx={rx}
//           ry={ry}
//           ref={pathRef}
//         />
//       </svg>
//       <motion.div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           display: "inline-block",
//           transform,
//         }}
//       >
//         {children}
//       </motion.div>
//     </>
//   );
// };


"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ------------------------------- BUTTON ------------------------------- */

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* Animated glowing border */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx={25} ry={25}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-80 blur-sm",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Inner content */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/80 text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

/* --------------------------- MOVING BORDER --------------------------- */

export const MovingBorder = ({
  children,
  duration = 3000,
  rx = 20,
  ry = 20,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: number;
  ry?: number;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const progress = useMotionValue(0);
  const pathLength = useRef(0);

  // Rounded rectangle path
  const pathD = `M${rx},0 
                 H${200 - rx} 
                 Q200,0 200,${ry}
                 V${100 - ry} 
                 Q200,100 ${200 - rx},100 
                 H${rx} 
                 Q0,100 0,${100 - ry} 
                 V${ry} 
                 Q0,0 ${rx},0 Z`;

  // Get total path length after mount
  useEffect(() => {
    if (pathRef.current) {
      try {
        pathLength.current = pathRef.current.getTotalLength();
      } catch (err) {
        console.warn("getTotalLength failed:", err);
      }
    }
  }, []);

  // Animate progress along the border
  useAnimationFrame((time) => {
    if (!pathRef.current || pathLength.current === 0) return;
    const pxPerMillisecond = pathLength.current / duration;
    progress.set((time * pxPerMillisecond) % pathLength.current);
  });

  // Convert progress to X/Y coordinates
  const x = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    try {
      return path.getPointAtLength(val)?.x ?? 0;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    try {
      return path.getPointAtLength(val)?.y ?? 0;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full w-full"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        {...otherProps}
      >
        <path ref={pathRef} d={pathD} fill="none" />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
