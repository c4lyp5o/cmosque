export default function ScrollingBanner() {
  return (
    <div className='absolute bottom-0 overflow-x-hidden'>
      <div className='relative flex overflow-x-hidden'>
        <div className='py-1 animate-marquee whitespace-nowrap overflow-x-hidden'>
          <span className='text-4xl mx-4'>
            Yang punya handphone, sila di matikan
          </span>
          <span className='text-4xl mx-4'>Marquee Item 2</span>
          <span className='text-4xl mx-4'>Marquee Item 3</span>
          <span className='text-4xl mx-4'>Marquee Item 4</span>
          <span className='text-4xl mx-4'>Marquee Item 5</span>
        </div>

        <div className='absolute top-0 py-1 animate-marquee2 whitespace-nowrap overflow-x-hidden'>
          <span className='text-4xl mx-4'>
            Yang punya handphone, sila di matikan
          </span>
          <span className='text-4xl mx-4'>Marquee Item 2</span>
          <span className='text-4xl mx-4'>Marquee Item 3</span>
          <span className='text-4xl mx-4'>Marquee Item 4</span>
          <span className='text-4xl mx-4'>Marquee Item 5</span>
        </div>
      </div>
    </div>
  );
}
