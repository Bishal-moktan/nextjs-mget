import { FaCarBattery, FaSolarPanel } from 'react-icons/fa';
import { GiSolarPower } from 'react-icons/gi';
import { MdOutlineSolarPower } from 'react-icons/md';
import routes from './routes';

const solutions = [
  {
    title: 'On-grid Solar System',
    path: routes.onGrid,
    icon: <GiSolarPower />,
  },
  {
    title: 'Off-grid Solar System',
    path: routes.offgrid,
    icon: <FaCarBattery />,
  },
  {
    title: 'Hybrid Solar System',
    path: routes.hybrid,
    icon: <FaSolarPanel />,
  },
  {
    title: 'Solar Water Pump',
    path: routes.solarWater,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 14.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M5 18V9a2 2 0 0 1-2-2a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h8a2 2 0 0 1 2 2v4a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1V9h-6v9h1a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2h1Z"
        />
      </svg>
    ),
  },
];

export default solutions;
