'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Cambiado aquí
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { pompiere } from '@/libs/font';

export default function ProductCarousel({ products }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      speed={2000} // Duración de la transición (1 segundo)
      autoplay={{
        delay: 4000, // Tiempo en milisegundos (3 segundos)
        disableOnInteraction: false, // Mantener autoplay aunque el usuario interactúe
      }}
      pagination={{
        clickable: true,
      }}
      className='max-w-xl w-full flex  items-center bg-color-cards rounded-md  h-3/5 mb-4 -z-50 cursor-grab '
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Image
            src={product.image}
            width={400}
            height={200}
            alt={product.title}
            className='w-full h-60 rounded-t-md bg-cover bg-no-repeat bg-center'
          />
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
