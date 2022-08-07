import { Card } from 'flowbite-react';

export default function Name({ mosqueName }) {
  return (
    <div className=' mx-2 my-2'>
      <Card>
        <h5 className='text-2xl text-center font-bold tracking-tight uppercase text-gray-900 dark:text-white'>
          🕌 {mosqueName} 🕌
        </h5>
      </Card>
    </div>
  );
}
