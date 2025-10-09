import { component$, useSignal, useVisibleTask$, Slot } from "@builder.io/qwik";

interface ParallaxSceneProps {
  /** The background image to show */
  image: string;

  /** Optional fade-in/out thresholds (viewport fraction) */
  enterStart?: number; // 0..1 (when fade in starts)
  exitEnd?: number; // 0..1 (when fade out ends)

  /** Optional overlay or gradient */
  overlayClass?: string;

  /** Custom opacity curve multiplier */
  fadePower?: number; // default 1, >1 = steeper fade
}

export const ParallaxScene = component$((props: ParallaxSceneProps) => {
  const {
    image,
    enterStart = 0.1,
    exitEnd = 0.9,
    overlayClass,
    fadePower = 1,
  } = props;

  const ref = useSignal<HTMLElement>();
  const bg = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    const section = ref.value!;
    const bgEl = bg.value!;
    const vh = window.innerHeight;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();

      // Calculate how much of the section is visible (0..1)
      const visible = Math.min(vh, Math.max(0, vh - rect.top));
      const progress = visible / (rect.height + vh);

      // Determine if section is active (within thresholds)
      let opacity = 0;
      if (progress < enterStart) {
        opacity = 0;
      } else if (progress > exitEnd) {
        opacity = 0;
      } else {
        // Normalize fade-in/out inside active window
        const t = (progress - enterStart) / (exitEnd - enterStart);
        const fadeIn = t < 0.5 ? Math.pow(t * 2, fadePower) : 1;
        const fadeOut = t > 0.5 ? Math.pow(1 - (t - 0.5) * 2, fadePower) : 1;
        opacity = Math.min(fadeIn, fadeOut);
      }

      bgEl.style.opacity = String(opacity);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });

  return (
    <section
      ref={ref}
      class="relative z-10 flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Fixed global background */}
      <div
        ref={bg}
        class="fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-500 ease-out"
        style={{
          backgroundImage: `url("${image}")`,
          opacity: "0",
        }}
      />
      {overlayClass && (
        <div class={`pointer-events-none fixed inset-0 z-0 ${overlayClass}`} />
      )}
      {/* Foreground content */}
      <div class="relative z-10 px-6 text-center">
        <Slot />
      </div>
    </section>
  );
});
