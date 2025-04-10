import { FC, useEffect, useMemo, useState } from 'react';
import HomeBarChart from '../components/home/HomeBarChart/HomeBarChart';
import HomeGreeting from '../components/home/HomeGreeting/HomeGreeting';
import HomeLineChart from '../components/home/HomeLineChart/HomeLineChart';
import HomeMacros from '../components/home/HomeMacros/HomeMacros';
import HomeRadarChart from '../components/home/HomeRadarChart/HomeRadarChart';
import HomeRadialChart from '../components/home/HomeRadialChart/HomeRadialChart';
import Layout from '../components/layout/Layout';
import { getUser, getUserActivity, getUserAverageSession, getUserPerformance } from '../services/api';
import { UserData } from '../types';

const Home: FC = () => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const [user, activity, averageSession, performance] = await Promise.all([
        getUser(12),
        getUserActivity(12),
        getUserAverageSession(12),
        getUserPerformance(12),
      ]);

      setData({ user, activity, averageSession, performance });
    }
    fetchData();
  }, []);

  const formattedSessions = useMemo(() => {
    return data?.activity.sessions.map(session => ({ ...session, day: session.day.split('-')[2] }));
  }, [data?.activity.sessions]);

  const formattedAverageSessions = useMemo(() => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return data?.averageSession.sessions.map((session, index) => ({ ...session, day: days[index] }));
  }, [data?.averageSession.sessions]);

  const formattedPerformances = useMemo(() => {
    if (data) {
      const performanceKeys = Object.values(data.performance.kind);
      return data?.performance.data.map((perf, index) => ({ ...perf, kind: performanceKeys[index] }));
    }
  }, [data]);

  return (
    <Layout>
      {data ? (
        <>
          <HomeGreeting name={data.user.userInfos.firstName} />
          <div className='mt-8 xl:mt-16 flex space-x-2 xl:space-x-8'>
            <div className='w-full'>
              <HomeBarChart sessions={formattedSessions || []} />
              <div className='mt-2 flex h-[240px] w-full space-x-2 xl:mt-8 xl:h-[280px] xl:space-x-8'>
                <HomeLineChart sessions={formattedAverageSessions || []} />
                <HomeRadarChart performances={formattedPerformances || []} />
                <HomeRadialChart score={data.user.todayScore} />
              </div>
            </div>
            <HomeMacros macros={data.user.keyData} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default Home;
