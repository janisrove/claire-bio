import { $ } from "@builder.io/qwik";
import { ImageTransformerProps } from "qwik-image";

export const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      const params = new URLSearchParams();

      if (width) params.append("width", String(width));
      if (height) params.append("height", String(height));

      const query = params.toString();
      return query ? `${src}?${query}` : src;
    },
);