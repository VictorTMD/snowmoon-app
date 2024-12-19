'use client';
import React, { useState } from 'react';
import { FiGift } from 'react-icons/fi';
import { RiCandleLine } from 'react-icons/ri';
import { pompiere } from '@/libs/font';
import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa6';
import { FaAmazon } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChangue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    const messageOk = 'Mensaje enviado con exito';
    const messageErr = 'Hubo un error en el envio';
    if (data.success) {
      enqueueSnackbar(messageOk, { variant: 'success' });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      enqueueSnackbar(messageErr, { variant: 'error' });
    }
  };

  return (
    <section
      id='contacto'
      className='h-full min-h-screen w-full px-4 pt-20 my-4
      '
    >
      <SnackbarProvider />
      <div className='flex justify-center items-center gap-2 mt-8'>
        <RiCandleLine className='text-2xl text-second-color ' />
        <p
          className={`${pompiere.className} text-center md:text-6xl text-5xl `}
        >
          CONTACTO
        </p>
        <FiGift className='text-2xl text-second-color ' />
      </div>
      <div className='w-full h-full rounded-md bg-color-sections mt-5'>
        <div className='bg-white w-full h-24 flex justify-around text-2xl items-center'>
          <Link href={'https://github.com/'}>
            <div className='hover:bg-pink-600   p-4 rounded-bl-xl '>
              <GrInstagram className='animate-bounce  motion-reduce:animate-bounce hover:animate-none' />
            </div>
          </Link>

          <Link href={'https://github.com/'}>
            <div className='hover:bg-teal-300 p-4 rounded-bl-xl '>
              <FaTiktok className='animate-bounce  motion-reduce:animate-bounce hover:animate-none' />
            </div>
          </Link>

          <Link href={'https://github.com/'}>
            <div className='hover:bg-orange-400 p-4 rounded-bl-xl '>
              <FaAmazon className='animate-bounce  motion-reduce:animate-bounce hover:animate-none text-3xl' />
            </div>
          </Link>
          <Link href={'https://github.com/'}>
            <div className='hover:bg-green-500 p-4 rounded-bl-xl '>
              <BsWhatsapp className='animate-bounce  motion-reduce:animate-bounce hover:animate-none' />
            </div>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className='p-4 space-y-4'>
          <div>
            <label htmlFor='name' className='block text-lg'>
              Nombre:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full p-2 border border-color-butoon focus:outline-none  focus:border-text-color rounded-sm'
              value={formData.name}
              onChange={handleChangue}
              required
              placeholder='Ingresa tu nombre*'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-lg'>
              Correo Electrónico:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Ingresa tu correo*'
              className='w-full p-2 border border-color-butoon focus:outline-none  focus:border-text-color rounded-sm'
              value={formData.email}
              onChange={handleChangue}
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-lg'>
              Mensaje:
            </label>
            <textarea
              id='message'
              name='message'
              maxLength={400}
              className='w-full p-2 border border-color-butoon focus:outline-none  focus:border-text-color rounded-sm'
              rows='4'
              placeholder='Ingresa tu mensaje*'
              value={formData.message}
              onChange={handleChangue}
              required
            />
          </div>
          <div className='w-full flex justify-center'>
            <button
              type='submit'
              className='w-48  bg-color-butoon border-2 border-second-color hover:bg-second-color  hover:border-text-color'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
