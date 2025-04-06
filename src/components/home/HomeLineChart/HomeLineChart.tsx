import { FC } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { UserAverageSession } from '../../../types';

interface HomeLineChartProps {
  sessions: UserAverageSession['sessions'];
}

const CustomTooltip: FC<{ active?: boolean; payload?: { value: number }[]; label?: string }> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white p-2 font-medium text-xs'>
        <p>{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

const HomeLineChart: FC<HomeLineChartProps> = ({ sessions }) => {
  return (
    <section className='relative w-1/3 h-full rounded-md bg-[#F00] px-8 py-6'>
      <div className='absolute top-0 right-0 w-[30%] rounded-r-md h-full bg-red-dark' aria-hidden />
      <h2 className='absolute text-white/50 font-medium w-36'>Durée moyenne des sessions</h2>
      <ResponsiveContainer width='100%' height='100%' className='recharts-line'>
        <LineChart
          data={sessions}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey='day' interval='preserveStartEnd' />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line type='monotone' dataKey='sessionLength' stroke='#FFB9B9' strokeWidth={2} dot={{ r: 0 }} activeDot={{ r: 4, fill: '#FFF', stroke: '#EAEAEA' }}  />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default HomeLineChart;
