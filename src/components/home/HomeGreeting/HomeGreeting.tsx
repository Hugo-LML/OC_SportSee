import { FC } from 'react';

interface HomeGreetingProps {
  name: string;
}

const HomeGreeting: FC<HomeGreetingProps> = ({ name }) => {
  return (
    <section>
      <h1 className='text-5xl font-medium'>
        Bonjour <span className='text-red'>{name}</span>
      </h1>
      <p className='text-lg mt-8'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default HomeGreeting;
