import { FC } from 'react';

const HomeBarChartLegend: FC = () => {
  return (
    <div className='absolute flex items-center justify-between w-[calc(100%-50px)]'>
      <h2 className='font-medium text-gray-dark'>Activité quotidienne</h2>
      <div className='flex items-center space-x-10 font-medium text-sm text-[#74798C]'>
        <div className='flex items-center space-x-1'>
          <div className='size-3 rounded-full bg-gray-dark' />
          <span>Poids (kg)</span>
        </div>
        <div className='flex items-center space-x-1'>
          <div className='size-3 rounded-full bg-red-dark' />
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBarChartLegend;
