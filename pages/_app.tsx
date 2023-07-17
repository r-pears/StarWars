import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Star Wars Decks</title>
        <meta name="description" content="Create your own Star Wars deck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navigation currentPath={router.pathname} />
      <Component {...pageProps} />
    </>
  );
}
