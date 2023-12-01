import Image from "next/image";
import { useEffect, useState } from "react";
import {
  StaticImageComponentProps,
  ImageColorPlaiceholderProps,
} from "@/types/staticimagecomponent.types";
import { getImagePlaiceholder } from "@/utils/image-plaiceholder.utils";

function StaticImageComponent(props: StaticImageComponentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [base64, setBase64] = useState<string>();
  const [color, setColor] = useState<ImageColorPlaiceholderProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { blurImage, color } = await getImagePlaiceholder(
          props.src.replace("./public", ""),
        );
        setBase64(blurImage);
        setColor(color);
      } catch (error) {
        console.error("Error fetching blurred image:", error);
      }
    };
    fetchData();
  }, [props.src]);

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
              props.animationSlideDir === "left" && !isLoading
                ? "-translate-x-full"
                : props.animationSlideDir === "right" && !isLoading
                  ? "translate-x-full"
                  : ""
            } duration-150 transition-all ease-in inline-block rounded z-10 top-0 left-0`}
          ></span>
          <Image
            {...props}
            src={props.src.replace("./public", "")}
            alt={props.alt}
            onLoad={() => {
              setIsLoading(false);
            }}
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
              !isLoading ? "opacity-0 invisible" : "visible opacity-100"
            } duration-150 transition-all ease-in inline-block rounded z-10 top-0 left-0`}
          ></span>
          <Image
            {...props}
            src={props.src.replace("./public", "")}
            alt={props.alt}
            onLoad={() => {
              setIsLoading(false);
            }}
          />
        </>
      )}

      {/* {!base64 && !color && (
        <Image
          {...props}
          src={props.src.replace("http://localhost:3000", "")}
          alt={props.alt}
        />
      )} */}
    </div>
  );
}

export default StaticImageComponent;
