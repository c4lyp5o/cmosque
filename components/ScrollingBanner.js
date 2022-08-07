import '../styles/Marquee.module.css';
export default function ScrollingBanner({ banner1, banner2, banner3 }) {
  if (!banner1 && !banner2 & !banner3) {
    banner1 = 'Assalamualaikum warahmatullahi wabarakatuh';
    banner2 = 'Allah kuasa, makhluk tiada kuasa';
    banner3 = 'Dalam sunnah Rasullullah ada kejayaan';
  }
  return (
    // <div classNameName='relative flex overflow-x-hidden'>
    //   <div classNameName='py-1 animate-marquee whitespace-nowrap overflow-x-hidden'>
    //     <span classNameName='text-4xl mx-4'>{banner1}</span>
    //     <span classNameName='text-4xl mx-4'>{banner2}</span>
    //     <span classNameName='text-4xl mx-4'>{banner3}</span>
    //   </div>

    //   <div classNameName='absolute top-0 py-1 animate-marquee2 whitespace-nowrap overflow-x-hidden'>
    //     <span classNameName='text-4xl mx-4'>{banner1}</span>
    //     <span classNameName='text-4xl mx-4'>{banner2}</span>
    //     <span classNameName='text-4xl mx-4'>{banner3}</span>
    //   </div>
    // </div>
    <div className='relative flex overflow-x-hidden'>
      <div className='py-1 animate-marquee whitespace-nowrap'>
        <span className='text-4xl mx-4'>Marquee Item 1 xxxxxxxxxx</span>
        <span className='text-4xl mx-4'>Marquee Item 2</span>
        <span className='text-4xl mx-4'>Marquee Item 3</span>
        <span className='text-4xl mx-4'>Marquee Item 4</span>
        <span className='text-4xl mx-4'>Marquee Item 5 hohohohohoh</span>
      </div>

      <div className='absolute top-0 py-1 animate-marquee2 whitespace-nowrap'>
        <span className='text-4xl mx-4'>Marquee Item 1 xxxxxxxxxx</span>
        <span className='text-4xl mx-4'>Marquee Item 2</span>
        <span className='text-4xl mx-4'>Marquee Item 3</span>
        <span className='text-4xl mx-4'>Marquee Item 4</span>
        <span className='text-4xl mx-4'>Marquee Item 5 hohohohohoh</span>
      </div>
    </div>

    // ------------
    // <div classNameName='absolute bottom-0 w-full text-4xl bg-amber-300'>
    //   <marquee>
    //     {banner1} | {banner2} | {banner3}{' '}
    //   </marquee>
    // </div>
    // --------------
  );
}
