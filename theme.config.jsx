import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: <span>Sentinels Robotics</span>,
  footer: {
    text: "Sentinels Robotics",
  },
  project: {
    link: "https://github.com/senrobo",
  },
  docsRepositoryBase: "https://github.com/senrobo/senrobo.github.io/tree/main/",
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Sentinels Robotics",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sentinels Robotics</title>
      <meta
        name="description"
        content="Doing Robocup Junior Soccer since 2021"
      />

      <meta property="og:url" content="https://senrobo.github.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sentinels Robotics" />
      <meta
        property="og:description"
        content="Doing Robocup Junior Soccer since 2021"
      />
      <meta property="og:image" content="/senIcon.png" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta property="og:type" content="website" />
    </>
  ),
};
