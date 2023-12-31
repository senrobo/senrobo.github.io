import sharp from "sharp";
import { defaultMeta } from "../data/socials";
import { readFile } from "node:fs/promises";
import satori, { type SatoriOptions } from "satori";

export interface OgData {
  title: string;
  date: Date;
}

/**
 * Opengraph template to generate svg
 */
const Template = (props: OgData) => (
  <div
    style={{
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "rgb(24 24 27)",
      letterSpacing: -1,
      fontWeight: 700,
      textAlign: "center",
      fontFamily: "Inter",
    }}
  >
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(20,184,166), rgb(59,130,246),rgb(168,85,247))",
        backgroundClip: "text",
        color: "transparent",
        fontSize: 50,
      }}
    >
      {props.title}
    </div>
    <div
      style={{
        color: "#FBFBFB",
        fontSize: 20,
      }}
    >
      Sentinels Robotics
    </div>
  </div>
);

/**
 * generate filename / path for generated OG images
 *
 * @param filename filename in asset folder
 * @returns
 */
export const getOgImagePath = (filename: string = defaultMeta.title) => {
  if (filename.startsWith("/")) filename = filename.substring(1);

  if (filename.endsWith("/"))
    filename = filename.substring(0, filename.length - 1);

  if (filename === "") filename = defaultMeta.title;

  return `./open-graph/${filename}.png`;
};

/**
 * generate opengraph image with satori and return a buffer
 *
 * @param text
 */

const generateOgImage = async (
  text: string = defaultMeta.title,
  date: Date = new Date(),
): Promise<Buffer> => {
  const options: SatoriOptions = {
    width: 600,
    height: 315,
    embedFont: true,
    fonts: [
      {
        name: "Inter",
        data: await readFile("./src/assets/font/Inter-Bold.ttf"),
        weight: 400,
        style: "normal",
      },
    ],
  };

  const svg = await satori(
    Template({
      title: text,
      date: date,
    }),
    options,
  );

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};

export default generateOgImage;
