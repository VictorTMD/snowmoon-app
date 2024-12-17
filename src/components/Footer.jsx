import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className='bg-color-sections h-14 w-full text-center'>
      <p className='text-text-color'>Sitio desarrollado por:</p>
      <Link href='https://victortmd.github.io/Portafolio-cv/'>
        <strong className='text-color-butoon'>Victor Morales</strong>
      </Link>
    </div>
  );
}
