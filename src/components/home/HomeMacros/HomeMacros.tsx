import { FC } from 'react';
import { User } from '../../../types';
import Kcal from '../../icons/Kcal';
import Proteins from '../../icons/Proteins';
import Carbs from '../../icons/Carbs';
import Fats from '../../icons/Fats';

interface HomeMacrosProps {
  macros: User['keyData'];
}

const HomeMacros: FC<HomeMacrosProps> = ({ macros }) => {
  const macroCards = [
    { key: 'calorieCount', label: 'Calories', unit: 'kCal', icon: Kcal, color: '#FBEAEA' },
    { key: 'proteinCount', label: 'Protéines', unit: 'g', icon: Proteins, color: '#E9F4FB' },
    { key: 'carbohydrateCount', label: 'Glucides', unit: 'g', icon: Carbs, color: '#FBF6E5' },
    { key: 'lipidCount', label: 'Lipides', unit: 'g', icon: Fats, color: '#FBEAEF' },
  ] as const;

  return (
    <section className='flex flex-col space-y-10'>
      {macroCards.map(card => (
        <div key={card.key} className='rounded-md bg-gray p-8 flex items-center space-x-6'>
          <div className='rounded-md flex justify-center items-center size-[3.75rem]' style={{ backgroundColor: card.color }}>
            <card.icon />
          </div>
          <div className='flex flex-col space-y-1'>
            <span className='font-bold text-xl'>{`${macros[card.key].toLocaleString()}${card.unit}`}</span>
            <span className='text-gray-medium text-sm'>{card.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeMacros;
