import { Manrope } from "next/font/google";

const roboto = Manrope({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
