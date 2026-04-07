import { useEffect } from "react";

export function useAnimatedH2(): void {
  useEffect(() => {
    const h2s = document.querySelectorAll<HTMLHeadingElement>(
      'h2:not([data-no-animated-h2="true"])',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLSpanElement>(".letter")
              .forEach((letter, i) => {
                letter.style.transitionDelay = `${i * 40}ms`;
                letter.classList.add("visible");
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    h2s.forEach((h2) => {
      // Skip headings that already contain inline markup to avoid hydration/style issues.
      if (h2.children.length > 0) {
        return;
      }

      const words = h2.textContent?.trim().split(" ") ?? [];
      if (words.length === 0) {
        return;
      }

      h2.innerHTML = words
        .map(
          (word) =>
            `<span class="word">${word
              .split("")
              .map((l) => `<span class="letter">${l}</span>`)
              .join("")}</span>`,
        )
        .join("");
      observer.observe(h2);
    });

    return () => observer.disconnect();
  }, []);
}
