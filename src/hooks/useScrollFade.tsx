import { useVisibleTask$ } from "@builder.io/qwik";

export const useScrollFade = () => {
  useVisibleTask$(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-fade");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: stop observing once visible
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
};
