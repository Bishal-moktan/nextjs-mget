import Image from 'next/image';

import ClientIcon from '@/public/icons/ClientIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import TrustIcon from '@/public/icons/TrustIcon';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import styles from '@/styles/Navbar.module.css';
import logo from '@/public/images/logo-dark.png';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar">
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
            <a href="#">+97123456</a>
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
        </div>
      </div>

      {/* navbar bottom  */}
      <div className={styles.navbar_bottom}>
        <div
          className={styles.toggle_btn}
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </div>

        <div className={styles.logo}>
          <div className={styles.img_container}>
            <Image src={logo} alt="mgetenergy logo" />
          </div>
        </div>
        <div
          className={
            showLinks ? `${styles.nav_links} ${styles.show}` : styles.nav_links
          }
        >
          <Link href="/" className="text-light">
            HOME
          </Link>
          <Link href="/about" className="text-light">
            ABOUT US
          </Link>
          <Link href="/services" className="text-light">
            SERVICES
          </Link>
          <Link href="/blogs" className="text-light">
            BLOGS
          </Link>
          <Link href="/contact" className="text-light">
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
