import Head from "next/head";
import PageContent from "../components/pageContent";
import Services from "../components/servicesList";

export default function Home() {
  const heading = "Welcome to Structured Captital Solutions";
  const paragraphs = [
    "Structured Capital Solutions (“SCS”) is an independent privately-held advisory business located in New York and London which specializes in domestic and cross-border structured finance.",
    "In particular SCS develops, structures, and arranges accounting and tax sensitive funding and investment transactions in the US, Europe, and Australasia for financial institutions, multinational corporations, hedge funds and private equity funds.",
  ];

  return (
    <>
      <Head>
        <title>Home | Structured Captital Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent heading={heading} paragraphs={paragraphs} />
      <Services />
    </>
  );
}
