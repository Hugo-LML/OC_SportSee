import { FC, SVGProps } from 'react';

const Workout: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29.712 20.576 32 18.288 29.712 16 24 21.712 10.288 8 16 2.288 13.712 0l-2.288 2.288L9.136 0 5.712 3.424 3.424 1.136 1.136 3.424l2.288 2.288L0 9.136l2.288 2.288L0 13.712 2.288 16 8 10.288 21.712 24 16 29.712 18.288 32l2.288-2.288L22.864 32l3.424-3.424 2.288 2.288 2.288-2.288-2.288-2.288L32 22.864l-2.288-2.288Z'
      fill='#FF0101'
    />
  </svg>
);

export default Workout;
