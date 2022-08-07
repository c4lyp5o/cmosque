import { Card } from 'flowbite-react';
import Link from 'next/link';
export default function About() {
  return (
    <div className='grid place-items-center h-screen text-center'>
      <div className='max-w-sm'>
        <Card imgSrc='https://avatars.githubusercontent.com/u/87253997?v=4'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            c4lyp5o
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Contact me at{' '}
            <Link href='https://github.com/c4lyp5o'>
              <a className='text-blue-500'>GitHub</a>
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
