import React, { useEffect, useRef } from "react";

const Stars = ({ numStars = 50 }) => {
  const containerRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const starsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    for (let i = 0; i < numStars; i++) {
      const div = document.createElement("div");
      const size = Math.random() * 2 + 1;
      div.style.position = "absolute";
      div.style.left = `${Math.random() * window.innerWidth}px`;
      div.style.top = `${Math.random() * window.innerHeight}px`;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.background = "white";
      div.style.borderRadius = "50%";
      div.style.pointerEvents = "none";
      div.style.boxShadow = "0 0 5px white";
      container.appendChild(div);
      starsRef.current.push(div);
    }
  }, [numStars]);


  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      starsRef.current.forEach((star) => {
        const rect = star.getBoundingClientRect();
        const dx = rect.left - mouse.current.x;
        const dy = rect.top - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          star.style.left = `${rect.left + (dx / dist) * 0.5}px`;
          star.style.top = `${rect.top + (dy / dist) * 0.5}px`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "transparent",
        overflow: "hidden",
        zIndex: 5,
        pointerEvents: "none",
      }}
    />
  );
};

export default Stars;
