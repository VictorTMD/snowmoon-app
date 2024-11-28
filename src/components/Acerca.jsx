'use client';
import { RiCandleLine } from 'react-icons/ri';
import { FiGift } from 'react-icons/fi';
import { pompiere } from '@/libs/font';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Acerca() {
  const [isVisible, setIsVisible] = useState(false); // Controla si la sección está visible
  const [typedText, setTypedText] = useState(''); // Controla el texto que se escribe progresivamente
  const [isTypingDone, setIsTypingDone] = useState(false); // Evita que se reinicie el efecto
  const sectionRef = useRef(null); // Referencia a la sección

  const fullText =
    ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, amet? Neque rem nesciunt fuga eos libero, architecto esse minima hic reprehenderit facilis illum maxime. Qui nostrum sit iusto magni illo." ';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTypingDone) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Se activa cuando el 20% de la sección es visible
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
  }, [isTypingDone]);

  useEffect(() => {
    if (isVisible && !isTypingDone) {
      let index = 0;

      const interval = setInterval(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;

        if (index >= fullText.length) {
          clearInterval(interval); // Detener cuando el texto completo esté escrito
          setIsTypingDone(true); // Marcar como completado
        }
      }, 100); // Ajusta la velocidad de escritura (en milisegundos)

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }
  }, [isVisible, isTypingDone]);

  return (
    <section
      id='acerca'
      ref={sectionRef}
      className='w-full min-h-screen pt-20 h-full text-center  text-5xl  gradiant'
    >
      <div className='flex justify-center items-center gap-2 mt-8 '>
        <RiCandleLine className='text-2xl text-second-color ' />
        <p
          className={`${pompiere.className} text-center md:text-6xl text-5xl `}
        >
          ACERCA
        </p>
        <FiGift className='text-2xl text-second-color ' />
      </div>
      <div className='flex flex-wrap justify-around items-center  gap-2 w-fulll h-full py-14'>
        <div className='relative w-72 h-72 md:w-96 md:h-96 rounded-e-3xl overflow-hidden'>
          <Image
            src={'/amigas.jpg'}
            alt='amigas'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0'
          />
          {/* Degradado encima de la imagen */}
          <div
            className='absolute inset-0'
            style={{
              background: `linear-gradient(
        0deg,
        rgba(55, 8, 118, 0.5) 30%,
        rgba(255, 255, 255, 0.5) 100%
      )`,
              mixBlendMode: 'multiply', // Ajusta cómo el degradado interactúa con la imagen
            }}
          ></div>
        </div>

        <div className='  w-72 h-72 md:w-96 md:h-96 my-8 s mx-4 p-1 '>
          <p className='text-xl md:text-3xl sm:text-1xl text-left '>
            {typedText}
          </p>
        </div>
      </div>
    </section>
  );
}
