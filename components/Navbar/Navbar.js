import Image from 'next/image';
import ClientIcon from '@/public/icons/ClientIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import TrustIcon from '@/public/icons/TrustIcon';
import { FaFacebook, FaYoutube, FaTwitter, FaBars } from 'react-icons/fa/index';
import { GrLinkedin } from 'react-icons/gr/index';
import styles from './Navbar.module.css';
import logo from '@/public/images/main-logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import routes from '@/data/routes';
import solutions from '@/data/solutions';
import services from '@/data/services';
import { navLinksIndex } from '@/data/navbarData';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [rotate, setRotate] = useState(false);
  const { activeNavLink, changeActiveNavLink } = useSelector(
    (store) => store.content
  );
  useEffect(() => {
    if (!showLinks) {
      setRotate(false);
    }
  }, [showLinks]);

  const handleNavLinkClick = () => {
    setShowLinks((prev) => !prev);
  };

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
              aria-label="Contact us through our email wecare@mgetenergy.com"
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
            <a
              href="tel:+919821876325"
              aria-label="Our contact number +919821876325"
              className={styles.navbar_top_contact}
            >
              +91 98218 76325,
            </a>
            <a
              href="tel:+919818666325"
              aria-label="Our contact number +919818666325"
              className={styles.navbar_top_contact}
            >
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
            <p className={styles.navbar_top_contact}>400+ Happy Clients</p>
          </div>
        </div>

        {/* social media links */}

        <div className={styles.navbar_top_socials}>
          <a
            href="https://www.facebook.com/mgetenergy"
            aria-label="Follow us on Facebook"
            target="_blank"
          >
            <FaFacebook className="fb_icon" />
          </a>
          <a
            href="https://twitter.com/MGETEnergy"
            aria-label="Follow us on Twitter"
            target="_blank"
          >
            <FaTwitter className="twitter_icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/mgetenergy"
            aria-label="Follow us on LinkedIn"
            target="_blank"
          >
            <GrLinkedin className="linkedin_icon" />
          </a>
          <a
            href="https://www.youtube.com/@mgetenergy"
            aria-label="Follow us on Youtube"
            target="_blank"
          >
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
              href={routes.home}
              className={
                activeNavLink === navLinksIndex.home
                  ? `${styles.links} ${styles.active}`
                  : styles.links
              }
            >
              HOME
            </Link>
            <Link
              onClick={handleNavLinkClick}
              href={routes.about}
              className={
                activeNavLink === navLinksIndex.about
                  ? `${styles.links} ${styles.active}`
                  : styles.links
              }
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
              onClick={handleNavLinkClick}
              href={routes.testimonials}
              className={
                activeNavLink === navLinksIndex.testimonials
                  ? `${styles.links} ${styles.active}`
                  : styles.links
              }
            >
              TESTIMONIALS
            </Link>
            <Link
              onClick={handleNavLinkClick}
              href="/blogs"
              className={
                activeNavLink === navLinksIndex.blog
                  ? `${styles.links} ${styles.active}`
                  : styles.links
              }
            >
              BLOGS
            </Link>
            <Link
              onClick={handleNavLinkClick}
              href={routes.contact}
              className={
                activeNavLink === navLinksIndex.contact
                  ? `${styles.links} ${styles.active}`
                  : styles.links
              }
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
