import { FC } from 'react';

interface HomeRadialChartLegendProps {
  score: number;
}

const HomeRadialChartLegend: FC<HomeRadialChartLegendProps> = ({ score }) => {
  return (
    <>
      <h2 className='text-gray-dark absolute top-2 left-2 xl:left-8 xl:top-6 font-medium'>Score</h2>
      <div className='absolute left-1/2 top-1/2 flex w-[62%] xl:w-[54%] aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white'>
        <div className='flex flex-col items-center text-center max-w-16 mt-4 xl:mt-8'>
          <h3 className='font-bold text-[#282D30] text-[1.625rem]'>{score}%</h3>
          <span className='text-gray-medium font-medium'>de votre objectif</span>
        </div>
      </div>
    </>
  );
};

export default HomeRadialChartLegend;
