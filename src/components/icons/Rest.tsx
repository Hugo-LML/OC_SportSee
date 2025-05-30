import { FC, SVGProps } from 'react';

const Rest: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width={36} height={32} viewBox='0 0 36 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM36 24v-4c-4.48 0-8.32-1.92-11.2-5.36l-2.68-3.2A3.96 3.96 0 0 0 19.06 10h-2.1c-1.18 0-2.3.52-3.06 1.44l-2.68 3.2C8.32 18.08 4.48 20 0 20v4c5.54 0 10.38-2.34 14-6.5V22l-7.76 3.1A3.594 3.594 0 0 0 4 28.42C4 30.4 5.6 32 7.58 32H12v-1c0-2.76 2.24-5 5-5h6c.56 0 1 .44 1 1s-.44 1-1 1h-6c-1.66 0-3 1.34-3 3v1h14.42C30.4 32 32 30.4 32 28.42c0-1.46-.9-2.78-2.24-3.32L22 22v-4.5c3.62 4.16 8.46 6.5 14 6.5Z'
      fill='#FF0101'
    />
  </svg>
);

export default Rest;
