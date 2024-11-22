import React from 'react';
import { pompiere } from '@/libs/font';
import { RiCandleLine } from 'react-icons/ri';
import ProductsCuidado from './ProductsCuidado';
import { ProductsCare } from '@/libs/products';
export default function Cuidados() {
  return (
    <section id='cuidados' className=' w-full h-full mb-5'>
      <div className='flex justify-center items-center gap-2 my-5'>
        <RiCandleLine className='text-2xl text-second-color ' />
        <p
          className={`${pompiere.className} text-center md:text-6xl text-5xl `}
        >
          CUIDADOS
        </p>
        <RiCandleLine className='text-2xl text-second-color ' />
      </div>
      <ProductsCuidado products={ProductsCare} />
    </section>
  );
}
