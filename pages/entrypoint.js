import ScrollingBanner from "../components/ScrollingBanner";
import Head from "next/head";
// import dynamic from "next/dynamic";
import OurCar from "../components/Carousel";
import SolatTimes from "../components/SolatTimes";

export default function Entrypoint() {
  return (
    <>
      <Head>
        <title>Entrypoint</title>
      </Head>
      <SolatTimes />
      <OurCar />
      <ScrollingBanner />
    </>
  );
}
