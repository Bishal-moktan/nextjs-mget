import Image from 'next/image';

import ClientIcon from '@/public/icons/ClientIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import TrustIcon from '@/public/icons/TrustIcon';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { FaBars } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import styles from '@/styles/Navbar.module.css';
import logo from '@/public/images/logo-dark.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDown from './DropDown';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const solutions = [
    {
      title: 'On-grid Solar System',
      path: 'OnGridSolarPowerSystem',
    },
    {
      title: 'Off-grid Solar System',
      path: 'OffGridSolarPowerSystem',
    },
    {
      title: 'Hybrid Solar System',
      path: 'HybridSolarSystem',
    },
    {
      title: 'Solar Water Pump',
      path: 'SolarWaterPump',
    },
  ];

  const services = [
    {
      title: 'Residential Solar',
      path: 'ResidentialSolar',
    },
    {
      title: 'Commercial Solar',
      path: 'CommercialSolar',
    },
    {
      title: 'Industrial Solar',
      path: 'IndustrialSolar',
    },
  ];
  return (
    <nav className="navbar" id="nav">
      {/* navbar top  */}
      <div className={styles.navbar_top}>
        <div className={styles.navbar_top_item}>
          <div className={styles.navbar_top_icon}>
            <EmailIcon />
          </div>
          <div className={styles.navbar_top_content}>
            <h2>Email Us</h2>
            <a href="mailto:wecare@mgetenergy.com">wecare@mgetenergy.com</a>
          </div>
        </div>

        <div className={styles.navbar_top_item}>
          <div className={styles.navbar_top_icon}>
            <ClientIcon />
          </div>
          <div className={styles.navbar_top_content}>
            <h2>Client Services</h2>
            <a href="tel:+919821876325" className={styles.tel}>
              +91 98218 76325
            </a>
            <a href="tel:+919818666325">+91 98186 66325</a>
          </div>
        </div>

        <div className={styles.navbar_top_item}>
          <div className={styles.navbar_top_icon}>
            <TrustIcon />
          </div>
          <div className={styles.navbar_top_content}>
            <h2>Trusted By</h2>
            <p>400+ Happy Clients</p>
          </div>
        </div>

        {/* social media links */}

        <div className={styles.navbar_top_socials}>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <GrLinkedin />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* navbar bottom  */}
      <div className={styles.navbar_bottom}>
        <div
          className={styles.toggle_btn}
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars className={styles.barsIcon} />
        </div>

        <div className={styles.logo}>
          <Link href={'/'} className={styles.img_container}>
            <Image src={logo} alt="mgetenergy logo" />
          </Link>
        </div>
        <div
          className={
            showLinks ? `${styles.nav_links} ${styles.show}` : styles.nav_links
          }
        >
          <Link href="/about" className={styles.links}>
            ABOUT US
          </Link>
          <DropDown name={'SOLUTIONS'} options={solutions} />
          <DropDown name={'SERVICES'} options={services} />
          <Link href="/blogs" className={styles.links}>
            BLOGS
          </Link>
          <Link href="/testimonials" className={styles.links}>
            TESTIMONIALS
          </Link>
          <Link href="/contact" className={styles.links}>
            CONTACT US
          </Link>
          <Link href="/contact" className={styles.links}>
            CAREERS
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
