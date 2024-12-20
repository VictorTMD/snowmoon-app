'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { GrCart } from 'react-icons/gr';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Importación modular
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { pompiere } from '@/libs/font';

export default function ProductCarousel({ products }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Registra los módulos aquí
      spaceBetween={20} // Espacio entre slides
      slidesPerView={1} // Cuántos slides se muestran a la vez
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Configuración de autoplay
      speed={2000} // Duración de la transición entre slides
      pagination={{
        clickable: true, // Permitir clics en la paginación
      }}
      className='max-w-xl w-full flex items-center bg-color-cards rounded-md h-3/5 -z-50'
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          {/* Imagen del producto */}
          <div className='w-full'>
            <Image
              src={product.image}
              width={400}
              height={200}
              alt={product.title}
              className='w-full h-60 rounded-t-md bg-cover bg-no-repeat object-cover bg-center cursor-grab'
            />
          </div>

          {/* Información del producto */}
          <div className='h-48'>
            <h1
              className={`${pompiere.className} text-3xl md:text-4xl text-text-color m-2 font-bold`}
            >
              {product.title}
            </h1>
            <p className='m-2 md:text-base sm:text-base text-xs'>
              {product.description}
            </p>
          </div>

          {/* Botón de agregar al carrito */}
          <div className='w-full flex justify-end'>
            <a
              href={product.url}
              target='_blank'
              rel='noopener noreferrer'
              className='relative cursor-pointer rounded-s-2xl flex items-center justify-center w-20 my-4 h-9 overflow-hidden bg-color-butoon border-t-2 border-b-2 border-l-2 border-second-color hover:bg-second-color hover:border-text-color'
            >
              <GrCart className='text-3xl' />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
