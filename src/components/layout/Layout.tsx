import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='pb-8 pl-[7.5rem] pr-2 pt-[6.625rem] xl:pb-16 xl:pl-[9rem] xl:pr-8 xl:pt-[7.625rem] 2xl:pb-20 2xl:pl-[13rem] 2xl:pr-24 2xl:pt-[9.625rem]'>{children}</main>
    </>
  );
};

export default Layout;
