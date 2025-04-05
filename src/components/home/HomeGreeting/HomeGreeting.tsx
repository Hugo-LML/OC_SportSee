import { FC } from 'react';

interface HomeGreetingProps {
  name: string;
}

const HomeGreeting: FC<HomeGreetingProps> = ({ name }) => {
  return (
    <div>
      <h1 className='text-5xl font-medium'>
        Bonjour <span className='text-red'>{name}</span>
      </h1>
      <p className='text-lg'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default HomeGreeting;
