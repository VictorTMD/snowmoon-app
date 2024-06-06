'use client';
import { useState } from 'react';
import Image from 'next/image';
import snoWMoon from '../../public/snoWMoon.svg';
import Link from 'next/link';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='flex w-full justify-center'>
      <header className='w-full m-3 pr-5 rounded-xl h-24 bg-color-head flex items-center justify-between 850pxutil:w-screen 850pxutil:m-0 850pxutil:rounded-none'>
        <Image
          className='h-25 w-48 ml-2'
          src={snoWMoon}
          alt='logo de snowmoon'
        ></Image>

        <nav
          className={`text-text-color  fixed top-0  left-0 w-full  h-64 flex flex-col justify-center items-center gap-3 text-xl font-medium 850px:static 850px:flex-row 850px:justify-end 850px:bg-transparent  850px:h-auto 850px:w-auto 850px:gap-7 ${
            isOpen ? 'flex' : 'hidden'
          } 850px:flex 850pxutil:mt-24 rounded-b-lg 850pxutil:bg-color-head transition duration0.5s`}
        >
          <Link
            className='link w-full transition duration0.5s  text-center'
            href='/'
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </Link>
          <Link href='/catalogo' onClick={() => setIsOpen(false)}>
            CATALOGO
          </Link>
          <Link href='/acerca' onClick={() => setIsOpen(false)}>
            ACERCA
          </Link>
          <Link href='/cuidados' onClick={() => setIsOpen(false)}>
            CUIDADOS
          </Link>
          <Link href='/contacto' onClick={() => setIsOpen(false)}>
            CONTACTO
          </Link>
        </nav>

        <div
          className='mr-2 850px:hidden flex'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
              />
            </svg>
          )}
        </div>
      </header>
    </section>
  );
}
