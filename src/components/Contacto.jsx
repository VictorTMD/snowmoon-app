import React from 'react';
import { FiGift } from 'react-icons/fi';
import { RiCandleLine } from 'react-icons/ri';
import { pompiere } from '@/libs/font';

export default function Contacto() {
  return (
    <section id='contacto' className='h-screen min-h-screen w-full px-4 pt-20'>
      <div className='flex justify-center items-center gap-2 mt-8'>
        <RiCandleLine className='text-2xl text-second-color ' />
        <p
          className={`${pompiere.className} text-center md:text-6xl text-5xl `}
        >
          CONTACTO
        </p>
        <FiGift className='text-2xl text-second-color ' />
      </div>
      <div className='w-full h-full rounded-md bg-color-sections mt-5'></div>
    </section>
  );
}
