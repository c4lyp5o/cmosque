import { Carousel } from 'flowbite-react';

export default function OurCar() {
  return (
    <div className='h-96'>
      <Carousel slideInterval={5000}>
        <img
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
        />
      </Carousel>
    </div>
  );
}
