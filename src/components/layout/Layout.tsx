import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='flex h-[calc(100vh-5.625rem)] w-full'>
        <Sidebar />
        <main className='w-full px-24 pb-20 pt-16'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
