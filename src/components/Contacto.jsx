'use client';
import React, { useState } from 'react';
import { FiGift } from 'react-icons/fi';
import { RiCandleLine } from 'react-icons/ri';
import { pompiere } from '@/libs/font';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChangue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setTimeout(() => {
        setStatus('Mensaje enviado con éxito');
      }, 5000);
      setFormData('');
    } else {
      setStatus('Hubo un error al enviar el mensaje');
    }
  };

  return (
    <section id='contacto' className='h-screen min-h-screen w-full px-4 pt-20'>
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
        <form onSubmit={handleSubmit} className='p-4 space-y-4'>
          <div>
            <label htmlFor='name' className='block text-lg'>
              Nombre:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full p-2 border'
              value={formData.name}
              onChange={handleChangue}
              required
              placeholder='Ingresa tu nombre *'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-lg'>
              Correo Electrónico
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 border'
              value={formData.email}
              onChange={handleChangue}
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-lg'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full p-2 border'
              rows='4'
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
        {status && (
          <p className='mt-4 w-24 text-center bg-color-butoon'>{status}</p>
        )}
      </div>
    </section>
  );
}
