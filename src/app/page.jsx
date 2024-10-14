import Acerca from '@/components/Acerca';
import Catalogo from '@/components/Catalogo';
import Contacto from '@/components/Contacto';
import Cuidados from '@/components/Cuidados';
import { Pompiere } from 'next/font/google';

const pompiere = Pompiere({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Page() {
  return (
    <section className='w-full h-full'>
      <div className='h-screen hero-image  flex justify-center text-center items-center '>
        <p className={`${pompiere.className} text-5xl md:text-7xl`}>
          Personalizacion y <br />
          disticion en <br /> regalos y eventos
        </p>
      </div>
      <Acerca />
      <Catalogo />
      <Contacto />
      <Cuidados />
    </section>
  );
}
