import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="border-claire-champagne/20 text-claire-pearl/60 relative mt-24 border-t pt-12 pb-8 text-center text-sm">
      {/* Signature line */}
      <p class="text-claire-pearl mb-2 font-serif text-base">
        Claire Nylon Lady <span class="text-claire-champagne/80">|</span> Nylon
        Muse
      </p>

      {/* Social links */}
      <div class="text-claire-pearl/70 mt-4 flex justify-center gap-6">
        <a
          href="#"
          class="hover:text-claire-rose transition-colors duration-300"
        >
          Instagram
        </a>
        <a
          href="#"
          class="hover:text-claire-rose transition-colors duration-300"
        >
          X / Twitter
        </a>
        <a
          href="#"
          class="hover:text-claire-rose transition-colors duration-300"
        >
          Wishlist
        </a>
      </div>

      {/* Copyright */}
      <p class="text-claire-pearl/50 mt-10 text-xs tracking-wide">
        © {new Date().getFullYear()} Claire Nylon Lady
      </p>
    </footer>
  );
});
