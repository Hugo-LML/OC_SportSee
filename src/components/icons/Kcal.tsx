import { FC, SVGProps } from 'react';

const Kcal: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width={16} height={20} viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.054 7.866S10.986 2.381 7.182 0a6.713 6.713 0 0 1-2.533 4.859C3.024 6.287-.032 9.5 0 12.925A7.856 7.856 0 0 0 4.314 20a4.98 4.98 0 0 1 1.743-3.444 4.066 4.066 0 0 0 1.557-2.731 7.32 7.32 0 0 1 3.875 6.101v.017a7.354 7.354 0 0 0 4.285-6.383c.27-3.218-1.492-7.593-3.056-9.023a8.491 8.491 0 0 1-2.664 3.33Z'
      fill='#FF0000'
    />
  </svg>
);

export default Kcal;
