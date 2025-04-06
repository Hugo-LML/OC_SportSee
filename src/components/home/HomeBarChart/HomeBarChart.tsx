import { FC } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { UserActivity } from '../../../types';
import HomeBarChartLegend from './HomeBarChartLegend';

interface HomeBarChartProps {
  sessions: UserActivity['sessions'];
}

const CustomTooltip: FC<{ active?: boolean; payload?: { value: number }[]; label?: string }> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='space-y-6 bg-red p-4 text-center text-sm text-white'>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
};

const HomeBarChart: FC<HomeBarChartProps> = ({ sessions }) => {
  return (
    <section className='relative w-full rounded-md bg-gray py-6 px-8'>
      <HomeBarChartLegend />
      <ResponsiveContainer width='100%' height='100%' style={{ overflow: 'visible' }}>
        <BarChart
          data={sessions}
          margin={{
            top: 80,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={10}
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='day' tickLine={false} tickMargin={16} />
          <YAxis orientation='right' tickLine={false} tickMargin={40} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#C4C4C450' }} />
          <Bar dataKey='kilogram' fill='#282D30' radius={[1000, 1000, 0, 0]} barSize={10} />
          <Bar dataKey='calories' fill='#E60000' radius={[1000, 1000, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default HomeBarChart;
