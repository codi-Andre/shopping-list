import Image from 'next/image';

import pen from '@/assets/backgrounds/pen-and-note.png';
import pencil_frag from '@/assets/backgrounds/pencil-frag.png';
import pencils from '@/assets/backgrounds/pencils.png';

export function BgImages() {
  return (
    <>
      <span className='absolute -top-8 right-0'>
        <Image src={pencil_frag} width={200} alt='' />
      </span>
      <span className='absolute bottom-0 -left-4'>
        <Image src={pen} width={200} alt='' />
      </span>
      <span className='absolute bottom-0 right-72'>
        <Image src={pencils} width={200} alt='' />
      </span>
    </>
  );
}
