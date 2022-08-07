import Head from 'next/head';
import { useRouter } from 'next/router';
import Name from '../components/Name';
import SolatTimes from '../components/SolatTimes';
import OurCar from '../components/Carousel';
import ScrollingBanner from '../components/ScrollingBanner';

export default function Entrypoint() {
  const router = useRouter();
  const { mosqueName, timezone, banner1, banner2, banner3 } = router.query;
  return (
    <>
      <Head>
        <title>{mosqueName}</title>
      </Head>
      <Name mosqueName={mosqueName} />
      <SolatTimes timezone={timezone} />
      <OurCar />
      <ScrollingBanner banner1={banner1} banner2={banner2} banner3={banner3} />
    </>
  );
}
