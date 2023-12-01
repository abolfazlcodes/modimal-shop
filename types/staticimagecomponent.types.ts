import { ImageProps } from "next/image";

type PropsToOmitKeys = "placeholder" | "blurDataURL" | "onLoad";

export type StaticImageComponentProps = Omit<ImageProps, PropsToOmitKeys> & {
  src: string;
  type?: "blur" | "color";
  animationType?: "opacity" | "slide";
  animationSlideDir?: "left" | "right" | "top" | "bottom";
} & (
    | {
        type: "blur";
        animationType?: never;
        animationSlideDir?: never;
      }
    | {
        type: "color";
        animationType: "opacity" | "slide";
        animationSlideDir: "left" | "right" | "top" | "bottom";
      }
    | {
        type: "color";
        animationType: "opacity";
        animationSlideDir?: never;
      }
    | {
        animationType: "slide";
        animationSlideDir: "left" | "right" | "top" | "bottom";
      }
  );

export type ImageColorPlaiceholderProps = {
  r: number;
  g: number;
  b: number;
  hex: string;
};

export type GetPlaiceholderDataProps = {
  blurImage: string;
  color: ImageColorPlaiceholderProps;
};
