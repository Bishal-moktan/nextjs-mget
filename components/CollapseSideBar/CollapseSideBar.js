import styles from './CollapseSideBar.module.css';
import {
  MdKeyboardArrowRight,
  MdOutlineFactory,
  MdOutlineSolarPower,
} from 'react-icons/md';
import { GiSolarPower } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { FaCarBattery, FaSolarPanel } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { openSidebar } from '@/features/contentSlice/contentSlice';

const CollapseSideBar = ({ name }) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openSidebar());
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.icon}>
        <MdKeyboardArrowRight onClick={handleOpen} />
      </div>
      <div className={styles.icons_lists}>
        {name === 'Solutions' ? (
          <>
            <div className={styles.icon}>
              <GiSolarPower />
            </div>
            <div className={styles.icon}>
              <MdOutlineSolarPower />
            </div>
            <div className={styles.icon}>
              <FaSolarPanel />
            </div>
            <div className={styles.icon}>
              <FaCarBattery />
            </div>
          </>
        ) : (
          <>
            <div className={styles.icon}>
              <BsHouseDoor />
            </div>
            <div className={styles.icon}>
              <MdOutlineFactory />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CollapseSideBar;
