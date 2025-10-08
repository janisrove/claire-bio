import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/layout/footer";

export const head: DocumentHead = {
  title: "Exclusive — Claire Nylon Lady",
  meta: [
    {
      name: "description",
      content: "Private sets and behind-the-scenes stories.",
    },
    { name: "robots", content: "noindex,nofollow" }, // keep this page out of search
  ],
};

export default component$(() => {
  return (
    <main class="bg-claire-bg text-claire-pearl selection:bg-claire-bordeaux/40 selection:text-claire-rose min-h-screen">
      {/* Top bar */}
      <header class="flex items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          class="text-claire-rose/90 hover:text-claire-rose transition"
        >
          <span class="icon-[material-symbols-light--arrow-back-2-rounded] mr-1 mb-0.5 size-5 align-middle"></span>
          Back
        </Link>
        <p class="text-claire-pearl/60 text-xs tracking-widest uppercase">
          Private Area
        </p>
      </header>

      {/* Hero / Intro */}
      <section class="relative mx-auto max-w-3xl px-6 pt-6 pb-10 text-center md:px-8">
        <h1 class="text-claire-rose font-serif text-4xl tracking-wide md:text-5xl">
          Step beyond the veil
        </h1>
        <p class="text-claire-pearl/90 mt-4 text-base italic md:text-lg">
          Reserved access to intimate sets, quiet videos, and gentle
          reflections.
        </p>

        {/* CTA buttons */}
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://onlyfans.com/clairenylonlady"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="border-claire-champagne text-claire-rose hover:bg-claire-bordeaux hover:text-claire-rose inline-block rounded-full border px-10 py-3 tracking-wide transition-all duration-700 ease-out"
          >
            Open on OnlyFans
            <span class="icon-[material-symbols-light--line-end-arrow-notch-rounded] mb-0.5 ml-1.5 size-5 align-middle"></span>
          </a>

          <a
            href="https://fansly.com/clairenylonlady"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="border-claire-champagne/60 text-claire-pearl hover:bg-claire-bordeaux/70 hover:text-claire-rose inline-block rounded-full border px-10 py-3 text-sm tracking-wide transition-all duration-700 ease-out"
          >
            Open on Fansly
            <span class="icon-[material-symbols-light--line-end-arrow-notch-rounded] mb-0.5 ml-1.5 size-5 align-middle"></span>
          </a>
        </div>

        <p class="text-claire-pearl/60 mt-3 text-xs">
          Safe, direct links — opens in a new tab.
        </p>
      </section>

      {/* Perks / reassurance */}
      <section class="mx-auto max-w-5xl px-6 py-8 md:px-8">
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-white/5 bg-white/2 p-5">
            <h3 class="text-claire-rose mb-2 font-serif">Exclusive Sets</h3>
            <p class="text-claire-pearl/85 text-sm">
              Curated photo series, layered textures, and seasonal edits.
            </p>
          </div>
          <div class="rounded-2xl border border-white/5 bg-white/2 p-5">
            <h3 class="text-claire-rose mb-2 font-serif">Quiet Videos</h3>
            <p class="text-claire-pearl/85 text-sm">
              Soft motion clips—subtle, cinematic, slow.
            </p>
          </div>
          <div class="rounded-2xl border border-white/5 bg-white/2 p-5">
            <h3 class="text-claire-rose mb-2 font-serif">Private Notes</h3>
            <p class="text-claire-pearl/85 text-sm">
              Behind-the-scenes thoughts and gentle journal entries.
            </p>
          </div>
        </div>
      </section>

      {/* Soft gallery tease (placeholders) */}
      <section class="mx-auto max-w-5xl px-6 pb-14 md:px-8">
        <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src={`/assets/riped-stockings.jpg`}
              alt="exclusive preview"
              loading="lazy"
              class="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-[1.03] hover:opacity-100"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} class="relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/600/800?grayscale&random=${i}`}
                alt="exclusive preview"
                loading="lazy"
                class="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-[1.03] hover:opacity-100"
              />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
});
