import useSWR from 'swr';
import { Card, Spinner } from 'flowbite-react';

export default function SolatTimes() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    'https://api.waktusolat.me/waktusolat/week/kdh01',
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  return (
    <>
      <div className='grid grid-cols-3 gap-4 mx-2 my-2'>
        <Card>
          <h1>Subuh</h1>
          <p>{data.data[0].fajr}</p>
        </Card>
        <Card>
          <h1>Syuruk</h1>
          <p>{data.data[0].syuruk}</p>
        </Card>
        <Card>
          <h1>Zuhur</h1>
          <p>{data.data[0].dhuhr}</p>
        </Card>
        <Card>
          <h1>Asar</h1>
          <p>{data.data[0].asr}</p>
        </Card>
        <Card>
          <h1>Maghrib</h1>
          <p>{data.data[0].maghrib}</p>
        </Card>
        <Card>
          <h1>{"Isha'"}</h1>
          <p>{data.data[0].isha}</p>
        </Card>
      </div>
    </>
  );
}
