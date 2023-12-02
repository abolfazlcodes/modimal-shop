import Image from "next/image";
import { StaticImageComponentProps } from "@/types/staticimagecomponent.types";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export default async function StaticImageComponent(
  props: StaticImageComponentProps,
) {
  const buffer = await fs.readFile(`${props.src}`);
  const { base64, color } = await getPlaiceholder(buffer);

  return (
    <div className="item-center overflow-hidden flex relative h-64 lg:h-80 w-44 lg:w-64 rounded">
      {props.type === "blur" && base64 && (
        <Image
          {...props}
          src={props.src.replace("./public", "")}
          alt={props.alt}
          placeholder="blur"
          blurDataURL={base64}
        />
      )}

      {props.type === "color" && props.animationType === "slide" && color && (
        <>
          <span
            style={{
              backgroundColor: color.hex,
            }}
            className={`absolute w-full h-full ${
              props.animationSlideDir === "left"
                ? "-translate-x-full"
                : props.animationSlideDir === "right"
                  ? "translate-x-full"
                  : ""
            } duration-400 transition-all ease-in inline-block rounded z-10 top-0 left-0`}
          ></span>
          <Image
            {...props}
            src={props.src.replace("./public", "")}
            alt={props.alt}
          />
        </>
      )}

      {props.type === "color" && props.animationType === "opacity" && color && (
        <>
          <span
            style={{
              backgroundColor: color.hex,
            }}
            className={`absolute w-full h-full ${
              color ? "opacity-0 invisible" : "visible opacity-100"
            } duration-150 transition-all ease-in inline-block rounded z-10 top-0 left-0`}
          ></span>
          <Image
            {...props}
            src={props.src.replace("./public", "")}
            alt={props.alt}
          />
        </>
      )}
    </div>
  );
}
