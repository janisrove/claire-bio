import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import CoatImage from "~/media/claire-red-coat-layers.jpg?format=webp&lossless=true&aspect=9:16&rotate=90&jsx";
import StockingImage from "~/media/claire-stockings-elegance.jpg?format=webp&lossless=true&aspect=9:16&rotate=90&jsx";
import LingerieImage from "~/media/lace-lingerie.jpg?format=webp&lossless=true&aspect=9:16&rotate=90&jsx";
import Footer from "~/components/layout/footer";

const ImageCard = component$(() => {
  return (
    <div class="group relative flex h-auto w-full flex-col items-stretch overflow-hidden even:flex-row-reverse md:h-[70vh] md:flex-row md:gap-12">
      {/* IMAGE */}
      <div class="relative h-[80vh] overflow-hidden sm:rounded-md md:h-full md:w-1/2 md:rounded-xl">
        <Slot name="image" />
        {/* Overlay only for mobile */}
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 md:hidden" />
      </div>
      {/* TEXT / CONTENT */}
      <div class="absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center md:relative md:w-1/2 md:justify-center md:px-12 md:pb-0 md:text-left">
        <Slot name="content" />
      </div>
    </div>
  );
});

const CtaBtn = component$(() => {
  return (
    <Link
      href="/exclusive"
      class="border-claire-champagne text-claire-rose hover:bg-claire-bordeaux/90 hover:text-claire-rose inline-block rounded-full border px-8 py-3 tracking-wide transition-all duration-700 ease-out"
    >
      Enter Private World →
    </Link>
  );
});

export default component$(() => {
  const videoRef = useSignal<HTMLVideoElement>();

  useVisibleTask$(() => {
    if (videoRef.value) {
      videoRef.value.playbackRate = 0.75; // slower, more cinematic
    }
  });

  return (
    <main class="overflow-x-hidden">
      {/* Hero */}
      <section class="scroll-fade relative flex h-screen flex-col items-center justify-center px-6 pb-24 text-center md:items-start md:justify-end md:px-16 md:pb-32">
        {/* Background video */}
        <video
          ref={videoRef}
          autoplay
          loop
          muted
          playsInline
          class="absolute inset-0 h-full w-full object-cover object-[center_70%] brightness-95 md:brightness-100"
        >
          <source src="/assets/hero-loop-opt.mp4" type="video/mp4" />
        </video>

        {/* Subtle gradient overlay */}
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80"></div>

        {/* Text content */}
        <div class="relative max-w-3xl self-center">
          <h1 class="text-claire-rose mb-2 font-serif text-5xl tracking-wide md:mb-4 md:text-7xl">
            Claire Nylon Lady
          </h1>
          <h2 class="text-claire-pearl mb-6 text-2xl italic md:text-4xl">
            Nylon Muse
          </h2>
          <p class="text-claire-pearl/90 mb-12 text-lg italic md:text-xl">
            An intimate study in elegance
          </p>

          <CtaBtn />
        </div>

        {/* Scroll hint */}
        <div class="text-claire-pearl/70 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-xl">
          Scroll
          <span class="icon-[material-symbols-light--arrow-downward-rounded] mb-1 size-8 align-middle"></span>
        </div>
      </section>

      {/* Essence */}
      <section class="relative container flex h-[90vh] flex-col items-center justify-center overflow-hidden text-center">
        <div class="relative max-w-2xl space-y-10 leading-relaxed">
          <p class="scroll-fade text-2xl font-light italic">
            Soft power hides in quiet gestures.
          </p>
          <p class="scroll-fade text-2xl font-light italic">
            Layers whisper more than words.
          </p>
          <p class="scroll-fade text-2xl font-light italic">
            Nylon, silk, and shadow — her chosen language.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section class="scroll-fade container flex flex-col flex-wrap space-y-16 md:flex-row">
        <ImageCard>
          <CoatImage
            loading="lazy"
            decoding="async"
            class="h-full object-cover opacity-80 transition-transform duration-[4000ms] group-hover:scale-110"
            alt="artistic nylon aesthetic"
            q:slot="image"
          />
          <p class="mb-2 text-xl italic" q:slot="content">
            Textures are memories.
          </p>
          <p class="max-w-2xl text-sm italic" q:slot="content">
            Each layer chosen deliberately — not for attention, but for
            sensation.
          </p>
        </ImageCard>
        <ImageCard>
          <StockingImage
            loading="lazy"
            decoding="async"
            class="h-full object-cover opacity-80 transition-transform duration-[4000ms] group-hover:scale-110"
            alt="artistic nylon aesthetic"
            q:slot="image"
          />
          <p class="mb-2 text-xl italic" q:slot="content">
            Textures are memories.
          </p>
          <p class="max-w-2xl text-sm italic" q:slot="content">
            Each layer chosen deliberately — not for attention, but for
            sensation.
          </p>
        </ImageCard>
        <ImageCard>
          <LingerieImage
            loading="lazy"
            decoding="async"
            class="h-full object-cover opacity-80 transition-transform duration-[4000ms] group-hover:scale-110"
            alt="artistic nylon aesthetic"
            q:slot="image"
          />
          <p class="mb-2 text-xl italic" q:slot="content">
            Textures are memories.
          </p>
          <p class="max-w-2xl text-sm italic" q:slot="content">
            Each layer chosen deliberately — not for attention, but for
            sensation.
          </p>
        </ImageCard>
      </section>

      {/* Invitation */}
      <section class="relative container flex h-screen flex-col items-center justify-center text-center">
        <div class="absolute inset-0"></div>

        <div class="relative max-w-xl space-y-6 px-6">
          <h2 class="scroll-fade text-3xl font-semibold md:text-4xl">
            Step beyond the veil
          </h2>
          <p class="scroll-fade text-lg italic">
            Private sets, behind-the-scenes stories, and layers reserved for
            true admirers.
          </p>

          <div class="scroll-fade flex flex-col gap-4 pt-10">
            <CtaBtn />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
