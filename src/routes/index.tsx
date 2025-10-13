import {
  component$,
  useId,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import CoatImage from "~/media/claire-red-coat-layers.jpg?format=webp&lossless=true&aspect=9:16&rotate=90&jsx";
import StockingImage from "~/media/claire-stockings-elegance.jpg?format=webp&lossless=true&aspect=9:16&rotate=90&jsx";
import LingerieImage from "~/media/lace-lingerie.jpg?format=webp&lossless=true&aspect=9:16&rotate=90&jsx";
import Footer from "~/components/layout/footer";
import { SwiperGallery } from "~/components/SwiperGallery";
/*
const ImageCard = component$(() => {
  return (
    <div class="group relative flex h-auto w-full flex-col items-stretch overflow-hidden even:flex-row-reverse md:h-[70vh] md:flex-row md:gap-12">
      <div class="relative h-[80vh] overflow-hidden sm:rounded-md md:h-full md:w-1/2 md:rounded-xl">
        <Slot name="image" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 md:hidden" />
      </div>
      <div class="absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center md:relative md:w-1/2 md:justify-center md:px-12 md:pb-0 md:text-left">
        <Slot name="content" />
      </div>
    </div>
  );
});*/

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

  const parallax1Id = useId();
  const parallax1StartId = useId();
  const parallax1EndId = useId();

  useVisibleTask$(() => {
    if (videoRef.value) {
      videoRef.value.playbackRate = 0.75; // slower, more cinematic
    }
  });

  useVisibleTask$(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /*ScrollTrigger.create({
        trigger: "#essence-section",
        end: "bottom 50%+=100px",
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity(),
          );

          const p = self.progress;
          const el = document.querySelector("#parallax1");
          const opacity = gsap.utils.clamp(0, 1, p * 1.5);
          const translateY = gsap.utils.interpolate(100, -50, p);

          gsap.set(el, {
            opacity,
            y: translateY,
          });
        },
      });*/

      const parallax1 = `#${parallax1Id}`;
      gsap.set(parallax1, {
        opacity: 0,
        y: "100vh", // start below the viewport
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${parallax1StartId}`,
          endTrigger: `#${parallax1EndId}`,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          invalidateOnRefresh: true,
          markers: false, // (optional) for debugging
        },
      });

      tl.to(parallax1, {
        y: "20vh",
        opacity: 0.5,
        duration: 20,
      })
        .to(parallax1, {
          opacity: 0.5,
          duration: 2,
        })
        .to(parallax1, {
          opacity: 0,
          duration: 5,
          delay: 5,
        });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div
        id={parallax1Id}
        class="box fixed inset-0 z-0 bg-[url(/assets/lace-lingerie.jpg)] mask-t-from-50% bg-cover bg-bottom will-change-transform"
      ></div>
      <main class="relative z-10 overflow-x-hidden">
        {/* Hero */}
        <section class="scroll-fade relative flex h-screen flex-col items-center justify-center px-6 pb-24 text-center md:items-start md:justify-end md:px-16 md:pb-36">
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
          <div class="text-claire-pearl/70 absolute bottom-18 left-1/2 -translate-x-1/2 animate-bounce text-sm">
            scroll
            <span class="icon-[material-symbols-light--arrow-downward-rounded] mb-1 size-4 align-middle"></span>
          </div>
        </section>

        {/* Essence */}
        {/** 
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
*/}

        <section
          id={parallax1StartId}
          class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
        >
          <div class="relative z-10 space-y-8 px-6 text-center">
            <p class="text-claire-champagne text-3xl leading-relaxed font-light tracking-wide md:text-5xl">
              Soft power hides in quiet gestures.
            </p>
            <p class="text-claire-pearl/90 text-2xl font-light italic md:text-4xl">
              Layers whisper more than words.
            </p>
            <p class="text-claire-rose/80 text-xl italic md:text-3xl">
              Nylon, silk, and shadow — her chosen language.
            </p>
          </div>
        </section>

        <section
          id="essence-next"
          class="container flex min-h-screen flex-col items-center justify-center md:flex-row md:justify-between"
        >
          <div
            class="px-8 py-16 text-center md:w-1/2 md:text-left"
            id={parallax1EndId}
          >
            <h2 class="text-claire-champagne mb-4 font-serif text-3xl">
              The Ritual of Elegance
            </h2>
            <p class="text-claire-pearl/80 mx-auto max-w-md leading-relaxed italic md:mx-0">
              Mornings begin with ritual — fabric, fragrance, and the quiet
              promise of silk. Each clasp, each seam, chosen with intent.
              Elegance is never rushed.
            </p>
          </div>
          <CoatImage
            loading="lazy"
            decoding="async"
            class="h-[60vh] object-cover md:h-screen md:w-1/2"
            alt="artistic nylon aesthetic"
            q:slot="image"
          />
        </section>

        <section class="container flex min-h-screen flex-col items-center justify-center md:flex-row md:justify-between">
          <div class="px-8 py-16 text-center md:w-1/2 md:text-left">
            <h2 class="text-claire-champagne mb-4 font-serif text-3xl">
              The Ritual of Elegance
            </h2>
            <p class="text-claire-pearl/80 mx-auto max-w-md leading-relaxed italic md:mx-0">
              Mornings begin with ritual — fabric, fragrance, and the quiet
              promise of silk. Each clasp, each seam, chosen with intent.
              Elegance is never rushed.
            </p>
          </div>
          <StockingImage
            loading="lazy"
            decoding="async"
            class="h-[60vh] cursor-grab object-cover md:h-screen md:w-1/2"
            alt="artistic nylon aesthetic"
            q:slot="image"
          />
        </section>

        <section class="flex min-h-screen flex-col items-center justify-center gap-16 px-0 pt-24 md:px-16 lg:px-32">
          <div class="max-w-3xl space-y-4 text-center md:text-left">
            <h2 class="text-claire-champagne font-serif text-3xl tracking-wide md:text-5xl">
              The Ritual of Elegance
            </h2>
            <p class="text-claire-pearl text-lg font-semibold md:text-xl">
              Elegance isn’t worn — it’s practiced.
            </p>
            <p class="text-claire-pearl/80 text-base leading-relaxed italic md:text-lg">
              Mornings begin with ritual — fabric, fragrance, and the quiet
              promise of silk. Each clasp, each seam, chosen with intent.
              Elegance is never rushed.
            </p>
          </div>

          <div class="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <figure class="group relative overflow-hidden">
              <CoatImage
                loading="lazy"
                decoding="async"
                class="h-[60vh] w-full cursor-pointer object-cover brightness-80 transition-transform duration-[4000ms] group-hover:scale-105"
                alt="artistic nylon aesthetic"
                q:slot="image"
              />
              <figcaption class="text-claire-pearl/80 absolute bottom-6 left-6 text-sm italic">
                A silent discipline in every clasp.
              </figcaption>
            </figure>
          </div>
          <SwiperGallery>
            <figure
              q:slot="slide"
              class="swiper-slide relative overflow-hidden"
            >
              <StockingImage
                class="h-72 w-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                alt="Claire in red coat"
              />
              <figcaption class="text-claire-pearl/80 absolute bottom-4 left-4 text-sm italic">
                Morning ritual — quiet devotion.
              </figcaption>
            </figure>
            <figure
              q:slot="slide"
              class="swiper-slide relative overflow-hidden"
            >
              <LingerieImage
                class="h-72 w-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                alt="Claire in red coat"
              />
              <figcaption class="text-claire-pearl/80 absolute bottom-4 left-4 text-sm italic">
                Morning ritual — quiet devotion.
              </figcaption>
            </figure>
            <figure
              q:slot="slide"
              class="swiper-slide relative overflow-hidden"
            >
              <StockingImage
                class="h-72 w-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                alt="Claire in red coat"
              />
              <figcaption class="text-claire-pearl/80 absolute bottom-4 left-4 text-sm italic">
                Morning ritual — quiet devotion.
              </figcaption>
            </figure>
            <figure
              q:slot="slide"
              class="swiper-slide relative overflow-hidden"
            >
              <StockingImage
                class="h-72 w-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                alt="Claire in red coat"
              />
              <figcaption class="text-claire-pearl/80 absolute bottom-4 left-4 text-sm italic">
                Morning ritual — quiet devotion.
              </figcaption>
            </figure>
          </SwiperGallery>
        </section>

        {/* Gallery */}
        {/* 
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
*/}
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
    </>
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
