import { FC, SVGProps } from 'react';

const Carbs: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width={17} height={20} viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.815 15.1c-.433.957-.64 1.385-1.197 2.231-.776 1.181-1.87 2.654-3.226 2.666-1.205.012-1.515-.783-3.15-.775-1.635.01-1.977.79-3.182.778-1.357-.013-2.393-1.341-3.17-2.524C-.28 14.171-.508 10.294.83 8.232 1.783 6.766 3.284 5.91 4.697 5.91c1.437 0 2.34.787 3.529.787 1.152 0 1.855-.788 3.517-.788 1.256 0 2.588.683 3.535 1.865-3.106 1.703-2.601 6.14.538 7.326Z'
      fill='#FDCC0C'
    />
    <path
      d='M1 15.1c.432.957.639 1.385 1.196 2.231.776 1.181 1.87 2.654 3.226 2.666 1.205.012 1.515-.783 3.15-.775 1.635.01 1.978.79 3.183.778 1.356-.013 2.392-1.341 3.17-2.524 2.17-3.305 2.397-7.182 1.058-9.244-.95-1.466-2.452-2.322-3.865-2.322-1.437 0-2.34.787-3.528.787-1.153 0-1.855-.788-3.518-.788-1.256 0-2.587.683-3.535 1.865C4.644 9.477 4.14 13.914 1 15.1ZM11.162 3.374c.683-.875 1.2-2.112 1.011-3.374-1.113.076-2.416.785-3.177 1.709-.69.838-1.26 2.082-1.039 3.291 1.216.037 2.474-.689 3.205-1.626Z'
      fill='#FDCC0C'
    />
  </svg>
);

export default Carbs;
