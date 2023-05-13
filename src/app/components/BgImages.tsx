import Image from 'next/image';

import pen from '@/assets/backgrounds/pen-and-note.png';
import pencils from '@/assets/backgrounds/pencils.png';

export function BgImages() {
  return (
    <>
      <span className='absolute -left-4 bottom-0'>
        <Image src={pen} width={200} alt='' />
      </span>
      <span className='absolute bottom-0 right-72'>
        <Image src={pencils} width={200} alt='' />
      </span>
    </>
  );
}
