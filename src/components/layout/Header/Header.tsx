import { FC } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Accueil', url: '#' },
  { label: 'Profil', url: '#' },
  { label: 'Réglage', url: '#' },
  { label: 'Communauté', url: '#' },
];

const Header: FC = () => {
  return (
    <header className='flex w-full items-center justify-between bg-black pl-7 pr-24 h-[5.625rem] text-white shadow-md'>
      <img src='/assets/images/logo.svg' alt='sport see logo' />
      {links.map(link => (
        <Link key={`Link.${link.label}`} to={link.url} className='text-2xl font-medium'>
          {link.label}
        </Link>
      ))}
    </header>
  );
};

export default Header;
