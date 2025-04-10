import { FC } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { User } from '../../../types';
import HomeRadialChartLegend from './HomeRadialChartLegend';

interface HomeRadialChartProps {
  score: User['todayScore'];
}

const HomeRadialChart: FC<HomeRadialChartProps> = ({ score }) => {
  const data = [{ score: score * 100, fill: '#FF0101' }];
  return (
    <section className='relative h-full w-1/3 rounded-md bg-gray px-4 py-3 xl:px-8 xl:py-6'>
      <HomeRadialChartLegend score={score * 100} />
      <ResponsiveContainer width='100%' height='100%' className='recharts-radial'>
        <RadialBarChart cx='50%' cy='50%' innerRadius='100%' outerRadius='80%' barSize={10} data={data} startAngle={90}>
          <PolarAngleAxis type='number' domain={[0, 100]} tick={false} dataKey='score' />
          <RadialBar label={false} background={false} dataKey='score' cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default HomeRadialChart;
