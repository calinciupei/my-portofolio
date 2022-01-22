import Jimp from "jimp";

/**
 * Service Methods
 */
export const getImage = async (image: string, width: number): Promise<Jimp> => {
  const imageJimp = await Jimp.read("");

  if (width) {
    imageJimp.resize(width, Jimp.AUTO);
  }

  imageJimp.quality(60); // JPEG quality

  return imageJimp;
};

export const getImageURL = async (image: string): Promise<string> => {
  return "";
};
