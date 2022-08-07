import useSWR from 'swr';
import { Suspense } from 'react';
import { Card, Spinner } from 'flowbite-react';

export default function SolatTimes({ timezone }) {
  const url = `https://api.waktusolat.me/waktusolat/week/${timezone}`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const options = {
    fetchInterval: 100000,
    suspense: true,
  };
  const { data, error } = useSWR(url, fetcher, options);
  const intepretHijriMonth = (month) => {
    switch (month) {
      case '01':
        return 'Muharram';
        break;
      case '02':
        return 'Safar';
        break;
      case '03':
        return 'Rabiul Awal';
        break;
      case '04':
        return 'Rabiul Akhir';
        break;
      case '05':
        return 'Jumadil Awal';
        break;
      case '06':
        return 'Jumadil Akhir';
        break;
      case '07':
        return 'Rajab';
        break;
      case '08':
        return 'Syaban';
        break;
      case '09':
        return 'Ramadhan';
        break;
      case '10':
        return 'Syawal';
        break;
      case '11':
        return 'Zulkaedah';
        break;
      case '12':
        return 'Zulhijjah';
        break;
      default:
        return 'Error';
    }
  };
  const intepretChristMonth = (month) => {
    switch (month) {
      case 'Jan':
        return 'Januari';
        break;
      case 'Feb':
        return 'Februari';
        break;
      case 'Mar':
        return 'Mac';
        break;
      case 'Apr':
        return 'April';
        break;
      case 'May':
        return 'Mei';
        break;
      case 'Jun':
        return 'Jun';
        break;
      case 'Jul':
        return 'Julai';
        break;
      case 'Aug':
        return 'Ogos';
        break;
      case 'Sep':
        return 'September';
        break;
      case 'Oct':
        return 'Oktober';
        break;
      case 'Nov':
        return 'November';
        break;
      case 'Dec':
        return 'Disember';
        break;
      default:
        return 'Error';
    }
  };
  const intepretDay = (day) => {
    switch (day) {
      case 'Sunday':
        return 'Ahad';
        break;
      case 'Monday':
        return 'Isnin';
        break;
      case 'Tuesday':
        return 'Selasa';
        break;
      case 'Wednesday':
        return 'Rabu';
        break;
      case 'Thursday':
        return 'Khamis';
        break;
      case 'Friday':
        return 'Jumaat';
        break;
      case 'Saturday':
        return 'Sabtu';
        break;
      default:
        return 'Error';
    }
  };
  const intepretHijriDate = (date) => {
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    const hijriMonth = intepretHijriMonth(month);
    if (day.includes('0', 0) && !day.includes('0', 1)) {
      day = day.slice(1, 2);
    }
    return `${day} ${hijriMonth} ${year}`;
  };
  const intpretChristDate = (date) => {
    const day = date.substring(0, 2);
    const month = date.substring(3, 6);
    const year = date.substring(7, 11);
    const christMonth = intepretChristMonth(month);
    if (day.includes('0', 0) && !day.includes('0', 1)) {
      day = day.slice(1, 2);
    }
    return `${day} ${christMonth} ${year}`;
  };
  const hijriDateToday = intepretHijriDate(data.data[0].hijri);
  const dateToday = intpretChristDate(data.data[0].date);
  const dayToday = intepretDay(data.data[0].day);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  return (
    <>
      <div className='grid grid-cols-3 gap-4 mx-2 my-2'>
        <Card>
          <h5 className='text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            {hijriDateToday}
          </h5>
        </Card>
        <Card>
          <h5 className='text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            {dayToday}
          </h5>
        </Card>
        <Card>
          <h5 className='text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            {dateToday}
          </h5>
        </Card>
      </div>
      <div className='grid grid-cols-6 gap-4 mx-2 my-2'>
        <Card>
          <h1 className='text-2xl text-center'>Subuh</h1>
          <p className='text-2xl text-center font-black'>{data.data[0].fajr}</p>
        </Card>
        <Card>
          <h1 className='text-2xl text-center'>Syuruk</h1>
          <p className='text-2xl text-center font-black'>
            {data.data[0].syuruk}
          </p>
        </Card>
        <Card>
          <h1 className='text-2xl text-center'>Zuhur</h1>
          <p className='text-2xl text-center font-black'>
            {data.data[0].dhuhr}
          </p>
        </Card>
        <Card>
          <h1 className='text-2xl text-center'>Asar</h1>
          <p className='text-2xl text-center font-black'>{data.data[0].asr}</p>
        </Card>
        <Card>
          <h1 className='text-2xl text-center'>Maghrib</h1>
          <p className='text-2xl text-center font-black'>
            {data.data[0].maghrib}
          </p>
        </Card>
        <Card>
          <h1 className='text-2xl text-center'>{"Isha'"}</h1>
          <p className='text-2xl text-center font-black'>{data.data[0].isha}</p>
        </Card>
      </div>
    </>
  );
}
