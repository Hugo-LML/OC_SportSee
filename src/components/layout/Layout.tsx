import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='pl-[13rem] pr-24 pb-20 pt-[9.625rem]'>{children}</main>
    </>
  );
};

export default Layout;
