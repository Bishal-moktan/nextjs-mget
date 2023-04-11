import { FaCarBattery, FaSolarPanel } from 'react-icons/fa';
import { GiSolarPower } from 'react-icons/gi';
import { MdOutlineSolarPower } from 'react-icons/md';

const solutions = [
  {
    title: 'On-grid Solar System',
    path: '/solutions/onGridSolarSystem',
    icon: <GiSolarPower />,
  },
  {
    title: 'Off-grid Solar System',
    path: '/solutions/offGridSolarSystem',
    icon: <MdOutlineSolarPower />,
  },
  {
    title: 'Hybrid Solar System',
    path: '/solutions/hybridSolarPump',
    icon: <FaSolarPanel />,
  },
  {
    title: 'Solar Water Pump',
    path: '/solutions/solarWaterPump',
    icon: <FaCarBattery />,
  },
];

export default solutions;
