import { $ } from "@builder.io/qwik";
import { useImageProvider, type ImageTransformerProps } from "qwik-image";

type UseBunnyImageProviderOptions = {
  /** Extra query params to always include (e.g., quality, fit, format). */
  baseParams?: Record<string, string | number | boolean | undefined | null>;
};

export function useBunnyImageProvider(
  options: UseBunnyImageProviderOptions = {},
) {
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      const params = new URLSearchParams();

      // only add defined params
      if (width) params.set("width", String(width));
      if (height) params.set("height", String(height));

      // merge optional base params
      for (const [k, v] of Object.entries(options.baseParams ?? {})) {
        if (v !== undefined && v !== null && v !== "") params.set(k, String(v));
      }

      const query = params.toString();
      return query ? `${src}?${query}` : src;
    },
  );

  useImageProvider({ imageTransformer$ });

  // return it too, if you ever want to reuse it directly
  return { imageTransformer$ };
}
