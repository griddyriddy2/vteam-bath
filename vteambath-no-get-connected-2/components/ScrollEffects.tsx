"use client";
import { useEffect } from "react";
export default function ScrollEffects() {
 useEffect(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  const nodes = document.querySelectorAll<HTMLElement>(".reveal-block");
  const observer = new IntersectionObserver((entries) => {
   for (const entry of entries) if (entry.isIntersecting) {entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
  }, {threshold: 0.09,rootMargin: "0px 0px -20px 0px"});
  nodes.forEach(n => observer.observe(n));
  return () => observer.disconnect();
 }, []);
 return null;
}
