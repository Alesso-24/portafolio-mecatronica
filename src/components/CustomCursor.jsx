import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Use passive event listener for performance
  useEffect(() => {
    // Detect if device supports hover
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(false);
    }

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });

    // Global mutation observer or simple event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if target is actionable (a, button, or has cursor-pointer)
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: "rgba(0, 216, 255, 1)",
      mixBlendMode: "normal",
      boxShadow: "0 0 10px rgba(0,216,255,0.5)"
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference",
      boxShadow: "none"
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
        x: { type: "spring", stiffness: 1000, damping: 50, mass: 0.1 },
        y: { type: "spring", stiffness: 1000, damping: 50, mass: 0.1 },
        scale: { duration: 0.2 },
        backgroundColor: { duration: 0.2 }
      }}
      style={{
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
      }}
    />
  );
};

export default CustomCursor;
