import { FC, useEffect, useState } from 'react';
import HomeGreeting from '../components/home/HomeGreeting/HomeGreeting';
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

  return (
    <Layout>
      {data ? (
        <HomeGreeting name={data.user.userInfos.firstName} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default Home;
