"use server";

import fs from "fs";
import path from "path";

import sharp from "sharp";

const image = path.join(process.cwd(), "public", "image.jpg");
console.log(image);

export const cutImage = async () => {
  const metadata = await sharp(image).metadata();
  console.log(metadata);

  const resizedImage = await sharp(image)
    .resize({
      width: 1000,
      height: 1000,
    })
    .jpeg()
    .toBuffer();

  const data = await sharp(image)
    .extract({
      left: 10,
      top: 10,
      width: 10,
      height: 10,
    })
    .jpeg()
    .toBuffer();

  const tempImagePath = path.join(process.cwd(), "temp", "image.jpeg");
  fs.writeFileSync(tempImagePath, resizedImage);

  return { metadata };
};
