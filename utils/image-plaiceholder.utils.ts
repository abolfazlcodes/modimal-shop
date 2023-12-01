import { GetPlaiceholderDataProps } from "@/types/staticimagecomponent.types";

export async function getImagePlaiceholder(
  src: string,
): Promise<GetPlaiceholderDataProps> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/placeholder?src=${src}`,
  );
  const data = await response.json();

  return { blurImage: data.blurImage, color: data.color };
}
