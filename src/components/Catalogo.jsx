'use client';
import { pompiere } from '@/libs/font';
import { RiCandleLine } from 'react-icons/ri';
import { FiGift } from 'react-icons/fi';

import { velas, watsMeltsSnapbars, resina } from '@/libs/products';
import ProductCarousel from './ProductCarousel';
export default function Catalogo() {
  return (
    <section id='catalogo' className={` h-full  w-full px-4 pt-20`}>
      <div className='flex justify-center mt-10 gap-2 items-center'>
        <RiCandleLine className='text-2xl text-second-color' />
        <p className={`${pompiere.className} text-center md:text-6xl text-5xl`}>
          CATALOGO
        </p>
        <FiGift className='text-2xl text-second-color' />
      </div>
      <div className='  bg-color-sections w-full h-full rounded-md mt-5 py-4'>
        {/*Seccion de velas  */}
        <p
          className={`${pompiere.className} text-center text-4xl md:text-5xl  p-4 sm:text-5xl `}
        >
          Velas de soja
        </p>

        <ProductCarousel products={velas} />

        {/* Seccion de Waxmelts */}
        <p
          className={`${pompiere.className} text-center text-4xl md:text-5xl  p-4 sm:text-5xl `}
        >
          Wax melts & Snapbars
        </p>

        <ProductCarousel products={watsMeltsSnapbars} />
        {/* Seccion de resina */}
        <p
          className={`${pompiere.className} text-center text-4xl md:text-5xl  p-4 sm:text-5xl `}
        >
          Piezas de resina
        </p>

        <ProductCarousel products={resina} />
      </div>
    </section>
  );
}
