import { component$, useVisibleTask$, Slot } from "@builder.io/qwik";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SwiperGalleryProps {
  /** Optional autoplay delay (ms) */
  autoplayDelay?: number;
  /** Optional slides per view on desktop */
  slidesPerViewDesktop?: number;
  /** Optional slides per view on mobile */
  slidesPerViewMobile?: number;
}

/**
 * SwiperGallery — A lazy-loaded, slot-based swiper component.
 * Use `<SwiperGallery>` and provide one or more `<div q:slot="slide">` children.
 */
export const SwiperGallery = component$(
  ({
    autoplayDelay = 0,
    slidesPerViewDesktop = 3,
    slidesPerViewMobile = 2.2,
  }: SwiperGalleryProps) => {
    useVisibleTask$(async () => {
      const { Swiper } = await import("swiper");
      const { Navigation, Pagination, Autoplay } = await import(
        "swiper/modules"
      );

      const swiperEl = document.querySelector(".claire-swiper") as HTMLElement;
      if (swiperEl) {
        new Swiper(swiperEl, {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: slidesPerViewMobile,
          spaceBetween: 16,
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: true,
          autoplay:
            autoplayDelay > 0
              ? { delay: autoplayDelay, disableOnInteraction: false }
              : false,
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: slidesPerViewDesktop },
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
          cssMode: true,
        });
      }
    });

    return (
      <>
        <div class="flex w-full flex-col gap-8">
          <div class="claire-swiper swiper w-full max-w-5xl overflow-hidden">
            <div class="swiper-wrapper">
              <Slot name="slide" />
            </div>
          </div>
          <div class="swiper-pagination bg-claire-champagne/30 !relative my-0 mr-8 !w-fit self-end rounded-full px-2 py-0 [--swiper-pagination-color:var(--color-claire-champagne)]"></div>
        </div>
      </>
    );
  },
);
