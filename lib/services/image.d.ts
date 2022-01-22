import Jimp from "jimp";
/**
 * Service Methods
 */
export declare const getImage: (image: string, width: number) => Promise<Jimp>;
export declare const getImageURL: (image: string) => Promise<string>;
