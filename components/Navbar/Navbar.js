import Image from 'next/image';
import ClientIcon from '@/public/icons/ClientIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import TrustIcon from '@/public/icons/TrustIcon';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import styles from './Navbar.module.css';
import logo from '@/public/images/main-logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import routes from '@/data/routes';
import solutions from '@/data/solutions';
import services from '@/data/services';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [rotate, setRotate] = useState(false);
  useEffect(() => {
    if (!showLinks) {
      setRotate(false);
    }
  }, [showLinks]);

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
          <a href="https://www.facebook.com/mgetenergy" target="_blank">
            <FaFacebook className="fb_icon" />
          </a>
          <a href="https://twitter.com/MGETEnergy" target="_blank">
            <FaTwitter className="twitter_icon" />
          </a>
          <a href="https://www.linkedin.com/company/mgetenergy" target="_blank">
            <GrLinkedin className="linkedin_icon" />
          </a>
          <a href="https://www.youtube.com/@mgetenergy" target="_blank">
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
            <Link
              onClick={() => setShowLinks((prev) => !prev)}
              href={routes.home}
              className={styles.img_container}
            >
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
            <Link
              onClick={() => setShowLinks((prev) => !prev)}
              href={routes.home}
              className={styles.links}
            >
              HOME
            </Link>
            <Link
              onClick={() => setShowLinks((prev) => !prev)}
              href={routes.about}
              className={styles.links}
            >
              ABOUT US
            </Link>
            <DropDown
              name={'SOLUTIONS'}
              options={solutions}
              path={routes.solutions}
            />
            <DropDown
              name={'SERVICES'}
              options={services}
              path={routes.services}
            />
            <Link
              onClick={() => setShowLinks((prev) => !prev)}
              href={routes.testimonials}
              className={styles.links}
            >
              TESTIMONIALS
            </Link>
            <Link
              onClick={() => setShowLinks((prev) => !prev)}
              href="/blogs"
              className={styles.links}
            >
              BLOGS
            </Link>
            <Link
              onClick={() => setShowLinks((prev) => !prev)}
              href={routes.contact}
              className={styles.links}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
