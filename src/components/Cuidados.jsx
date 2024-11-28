import React from 'react';
import { pompiere } from '@/libs/font';
import { RiCandleLine } from 'react-icons/ri';
import { FiGift } from 'react-icons/fi';
import ProductsCuidado from './ProductsCuidado';
import { ProductsCare } from '@/libs/products';
export default function Cuidados() {
  return (
    <section id='cuidados' className=' w-full min-h-screen h-full pt-20 '>
      <div className='flex justify-center items-center gap-2 mt-8'>
        <RiCandleLine className='text-2xl text-second-color ' />
        <p
          className={`${pompiere.className} text-center md:text-6xl text-5xl `}
        >
          CUIDADOS
        </p>
        <FiGift className='text-2xl text-second-color ' />
      </div>
      <ProductsCuidado products={ProductsCare} />
    </section>
  );
}
