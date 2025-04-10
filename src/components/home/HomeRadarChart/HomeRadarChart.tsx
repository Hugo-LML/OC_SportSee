import { FC } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { UserPerformance } from '../../../types';

interface HomeRadarChartProps {
  performances: UserPerformance['data'];
}

const HomeRadarChart: FC<HomeRadarChartProps> = ({ performances }) => {
  return (
    <section className='relative h-full w-1/3 rounded-md bg-[#282D30] px-8 py-6'>
      <ResponsiveContainer width='100%' height='100%' className='recharts-radar'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={performances}>
          <PolarGrid  />
          <PolarAngleAxis dataKey='kind' className='capitalize' />
          <Radar dataKey='value' fill='#FF0101' fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default HomeRadarChart;
