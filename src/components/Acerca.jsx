'use client';
import { RiCandleLine } from 'react-icons/ri';
import { pompiere } from '@/libs/font';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
export default function Acerca() {
  const [isVisible, setIsVisible] = useState(false); // Controla si la sección está visible
  const sectionRef = useRef(null); // Referencia a la sección

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Cambia el estado si la sección entra en pantalla
      },
      {
        threshold: 0.2, // Se activa cuando el 50% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observa el elemento
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpia el observador
      }
    };
  }, []);
  return (
    <section
      id='acerca'
      ref={sectionRef}
      className='w-full h-full text-center text-5xl my-8 gradiant  '
    >
      <div className='flex justify-center items-center gap-2'>
        <RiCandleLine className='text-2xl text-second-color ' />
        <p
          className={`${pompiere.className} text-center md:text-6xl text-5xl `}
        >
          ACERCA
        </p>
        <RiCandleLine className='text-2xl text-second-color ' />
      </div>
      <div className='grid gap-8 justify-items-center     md:grid-cols-3  h-full my-24 py-8  '>
        <div
          className={`h-96 w-64 bg-color-cards shadow-sm  shadow-slate-600   rounded-t-xl relative  ${
            isVisible ? 'wobble-hor-bottom ' : ''
          }`}
        >
          <Image
            src={'/avatarcard.jpg'}
            width={800}
            height={800}
            alt='lorena'
            className='md:h-36 md:w-36 w-32 h-32  absolute -top-14 md:right-14 sm:right-16 right-16  rounded-full bg-contain bg-center bg-no-repeat'
          ></Image>
          <p
            className={`${pompiere.className} text-center text-4xl md:text-5xl  pt-24 sm:text-5xl `}
          >
            Lorena
          </p>
          <p className='text-sm p-4 px-8 text-left'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            aliquam expedita harum, blanditiis laboriosam sapiente totam
            consectetur officiis minima similique eum magnam ipsa officia
            repellat voluptate maxime numquam animi! Libero?
          </p>
        </div>
        <div className='h-[500px] w-72 '>
          <p className='text-lg px-8 pt-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis corporis voluptas vero! Deserunt distinctio, id nihil
            dolore numquam excepturi quia minus qui omnis quae, nam voluptas
            impedit! Explicabo, vero excepturi? eserunt distinctio, id nihil
            dolore numquam excepturi quia minus qui omnis quae, nam
          </p>
        </div>
        <div
          className={`h-96 w-64 bg-color-cards shadow-sm  shadow-slate-600   rounded-t-xl relative ${
            isVisible ? 'wobble-hor-bottom ' : ''
          }`}
        >
          <Image
            src={'/avatarcard.jpg'}
            width={800}
            height={800}
            alt='lorena'
            className='md:h-36 md:w-36 w-32 h-32  absolute -top-14 md:right-14 sm:right-16 right-16  rounded-full bg-contain bg-center bg-no-repeat'
          ></Image>
          <p
            className={`${pompiere.className} text-center text-4xl md:text-5xl  pt-24 sm:text-5xl `}
          >
            Mada
          </p>
          <p className='text-sm p-4 px-8 text-left'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            aliquam expedita harum, blanditiis laboriosam sapiente totam
            consectetur officiis minima similique eum magnam ipsa officia
            repellat voluptate maxime numquam animi! Libero?
          </p>
        </div>
      </div>
    </section>
  );
}
