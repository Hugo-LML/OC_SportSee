import { FC } from 'react';
import { Link } from 'react-router-dom';
import Biking from '../../icons/Biking';
import Rest from '../../icons/Rest';
import Swim from '../../icons/Swim';
import Workout from '../../icons/Workout';

const links = [
  { label: 'Rest', url: '#', icon: Rest },
  { label: 'Swimming', url: '#', icon: Swim },
  { label: 'Biking', url: '#', icon: Biking },
  { label: 'Workout', url: '#', icon: Workout },
];

const Sidebar: FC = () => {
  return (
    <nav className='relative flex h-full flex-col justify-center items-center bg-black px-6 text-white'>
      <div className='flex flex-col space-y-5 pb-40 2xl:pb-20'>
        {links.map(link => (
          <Link key={link.label} to={link.url} title={link.label} className='flex size-16 items-center justify-center rounded-md bg-white'>
            <link.icon />
          </Link>
        ))}
      </div>
      <span className='rotate-180 absolute bottom-4 text-xs font-medium' style={{ writingMode: 'vertical-rl' }}>Copiryght, SportSee 2020</span>
    </nav>
  );
};

export default Sidebar;
