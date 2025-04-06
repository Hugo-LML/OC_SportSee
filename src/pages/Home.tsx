import { FC, useEffect, useMemo, useState } from 'react';
import HomeBarChart from '../components/home/HomeBarChart/HomeBarChart';
import HomeGreeting from '../components/home/HomeGreeting/HomeGreeting';
import Layout from '../components/layout/Layout';
import { getUser, getUserActivity, getUserAverageSession, getUserPerformance } from '../services/api';
import { UserData } from '../types';
import HomeMacros from '../components/home/HomeMacros/HomeMacros';

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
    return data?.activity.sessions.map(session => ({ ...session, day: session.day.split("-")[2] }));
  }, [data]);

  return (
    <Layout>
      {data ? (
        <>
          <HomeGreeting name={data.user.userInfos.firstName} />
          <div className='flex space-x-8 mt-16'>
            <HomeBarChart sessions={formattedSessions || []} />
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
