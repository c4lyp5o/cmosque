import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function OurCar() {
  return (
    <div className='h-80 mx-2 my-2'>
      <Carousel slideInterval={5000}>
        <Image
          src='https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Anti-Mage_icon.png'
          alt='Picture of the author'
          width={1920}
          height={900}
        />
        <Image
          src='https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Alchemist_icon.png'
          alt='Picture of the author'
          width={1920}
          height={900}
        />
        <Image
          src='https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Beastmaster_icon.png'
          alt='Picture of the author'
          width={1920}
          height={900}
        />
        {/* <img
          src='https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Anti-Mage_icon.png'
          alt='...'
        />
        <img
          src='https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Alchemist_icon.png'
          alt='...'
        />
        <img
          src='https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Beastmaster_icon.png'
          alt='...'
        /> */}
      </Carousel>
    </div>
  );
}
