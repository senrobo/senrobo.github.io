import sharp from "sharp";
import { defaultMeta } from "../data/socials";
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
      backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
      letterSpacing: -1,
      fontWeight: 700,
      textAlign: "center",
    }}
  >
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
        backgroundClip: "text",
        color: "transparent",
        fontSize: 50,
      }}
    >
      {props.title}
    </div>
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
        backgroundClip: "text",
        color: "transparent",
        fontSize: 24,
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

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf",
  );
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf",
  );
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const generateOgImage = async (
  text: string = defaultMeta.title,
  date: Date = new Date(),
): Promise<Buffer> => {
  const options: SatoriOptions = {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: [
      {
        name: "IBM Plex Mono",
        data: fontRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "IBM Plex Mono",
        data: fontBold,
        weight: 600,
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
