import Acerca from '@/components/Acerca';
import Catalogo from '@/components/Catalogo';
import Contacto from '@/components/Contacto';
import Cuidados from '@/components/Cuidados';
import { pompiere } from '@/libs/font';

export default function Page() {
  return (
    <section className='w-full h-full text-text-color'>
      <div className='h-screen hero-image  flex justify-center text-center items-center '>
        <p className={`${pompiere.className} text-6xl md:text-8xl sm:text-7xl`}>
          Personalizacion y <br />
          disticion en <br /> regalos y eventos
        </p>
      </div>
      <Catalogo />
      <Acerca />
      <Cuidados />
      <Contacto />
    </section>
  );
}
