import Image from 'next/image';

import ClientIcon from '@/public/icons/ClientIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import TrustIcon from '@/public/icons/TrustIcon';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { FaBars } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import styles from '@/styles/Navbar.module.css';
import logo from '@/public/images/logo-dark.png';
import Link from 'next/link';
import { useState } from 'react';
import DropDown from './DropDown';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [rotate, setRotate] = useState(false);

  const { solutions, services } = useSelector((store) => store.content);
  return (
    <nav className={styles.navbar} id="nav">
      {/* navbar top  */}
      <div className={styles.navbar_top}>
        <div className={styles.navbar_top_item}>
          <div className={styles.navbar_top_icon}>
            <EmailIcon />
          </div>
          <div className={styles.navbar_top_content}>
            <h4>Email Us</h4>
            <a
              href="mailto:wecare@mgetenergy.com"
              className={styles.navbar_top_contact}
            >
              wecare@mgetenergy.com
            </a>
          </div>
        </div>

        <div className={styles.navbar_top_item}>
          <div className={styles.navbar_top_icon}>
            <ClientIcon />
          </div>
          <div className={styles.navbar_top_content}>
            <h4>Client Services</h4>
            <a href="tel:+919821876325" className={styles.navbar_top_contact}>
              +91 98218 76325,
            </a>
            <a href="tel:+919818666325" className={styles.navbar_top_contact}>
              {' '}
              98186 66325
            </a>
          </div>
        </div>

        <div className={styles.navbar_top_item}>
          <div className={styles.navbar_top_icon}>
            <TrustIcon />
          </div>
          <div className={styles.navbar_top_content}>
            <h4>Trusted By</h4>
            <a className={styles.navbar_top_contact}>400+ Happy Clients</a>
          </div>
        </div>

        {/* social media links */}

        <div className={styles.navbar_top_socials}>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook className="fb_icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter className="twitter_icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <GrLinkedin className="linkedin_icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaYoutube className="youtube_icon" />
          </a>
        </div>
      </div>

      {/* navbar bottom  */}
      <div className={styles.navbar_bottom_wrapper}>
        <div className={styles.navbar_bottom}>
          <div
            className={styles.toggle_btn}
            onClick={() => {
              setShowLinks((prev) => !prev);
              setRotate((prev) => !prev);
            }}
          >
            <FaBars
              className={`${styles.barsIcon} ${rotate && styles.rotate}`}
            />
          </div>

          <div className={styles.logo}>
            <Link href={'/'} className={styles.img_container}>
              <Image
                src={logo}
                alt="mgetenergy logo"
                height={'auto'}
                width={'auto'}
              />
            </Link>
          </div>
          <div
            className={
              showLinks
                ? `${styles.nav_links} ${styles.show}`
                : styles.nav_links
            }
          >
            <Link href="/" className={styles.links}>
              HOME
            </Link>
            <Link href="/about" className={styles.links}>
              ABOUT US
            </Link>
            <DropDown
              name={'SOLUTIONS'}
              options={solutions}
              path={'/solutions'}
            />
            <DropDown name={'SERVICES'} options={services} path={'/services'} />
            <Link href="/testimonials" className={styles.links}>
              TESTIMONIALS
            </Link>
            <Link href="/blogs" className={styles.links}>
              BLOGS
            </Link>
            <Link href="/contact" className={styles.links}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
