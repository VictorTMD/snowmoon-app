'use client';
import Link from 'next/link';
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
      autoplay={{ delay: 5000, disableOnInteraction: false }} // Configuración de autoplay
      speed={3000} // Duración de la transición entre slides
      pagination={{
        clickable: true, // Permitir clics en la paginación
      }}
      preventClicks={false} // Permitir clics
      preventClicksPropagation={false} // Permite que los clics internos no se bloqueen
      allowTouchMove={true} // Asegura que el deslizamiento con el dedo funcione
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
          <div className='h-48 cursor-grab'>
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
          {/* <div className='w-full flex justify-end'>
            <Link
              href={product.url}
              className='relative z-10 cursor-pointer rounded-s-2xl flex items-center justify-center w-20 my-4 h-9  bg-color-butoon border-t-2 border-b-2 border-l-2 border-second-color hover:bg-second-color hover:border-text-color '
            >
              <GrCart className='text-3xl' />
            </Link>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
