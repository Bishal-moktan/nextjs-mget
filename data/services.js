import { BsHouseDoor } from 'react-icons/bs';
import { MdOutlineFactory } from 'react-icons/md';
import routes from './routes';

const services = [
  {
    title: 'Residential Solar',
    path: routes.residential,
    icon: <BsHouseDoor />,
    slogan: 'Solar for your home',
  },
  {
    title: 'Commercial & Industrial Solar',
    path: routes.commercial,
    icon: <MdOutlineFactory />,
    slogan: 'Solar solutions for businesses',
  },
];

export default services;
