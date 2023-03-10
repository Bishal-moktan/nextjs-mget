import Image from 'next/image';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { BsEnvelope } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Link from 'next/link';
import logo from '@/public/images/logo-dark.png';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__socials}>
            <div className={styles.img__container}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </div>

            <div className={styles.icons}>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook className="fb_icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitter className="twitter_icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <GrLinkedin className="linkedin_icon" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <FaYoutube className="youtube_icon" />
              </a>
            </div>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul>
              <li>
                <Link className="text_light" href={'/'}>
                  About us
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/solutions'}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/services'}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/testimonials'}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/blogs'}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__services}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link className="text_light" href={'/services/housing'}>
                  Solar for Housing
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/services/industry'}>
                  Solar for Industries
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/services/agriculture'}>
                  Solar for Agriculture
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/services/healthcare'}>
                  Solar for Healthcare
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/services/company'}>
                  Solar for IT Company
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/services/institute'}>
                  Solar for Institutes
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__contact}>
            <h3>Office Locations</h3>
            <ul>
              <li>
                <SlLocationPin className={styles.footer__contact_icon} />
                <span className="text_light">Greater Noida</span>
              </li>
              <li>
                <SlLocationPin className={styles.footer__contact_icon} />
                <span className="text_light">Mumbai</span>
              </li>
              <li>
                <AiOutlineClockCircle className="navbar__socials-icon" />
                <span className="text_light"> 09:30am - 5:30pm</span>
                <p className="text_light">Monday to Saturday</p>
              </li>
            </ul>
          </div>
          <div className={styles.footer__newsletter}>
            <h3>Contact</h3>
            <ul>
              <li>
                <FiPhoneCall className={styles.footer__contact_icon} />
                <Link href="tel:+91 98218 76325" className="text_light">
                  +91 98218 76325
                </Link>
              </li>
              <li>
                <FiPhoneCall className={styles.footer__contact_icon} />
                <Link href="tel:+91 98186 66325" className="text_light">
                  +91 98186 66325
                </Link>
              </li>
              <li>
                <BsEnvelope className={styles.footer__contact_icon} />
                <Link
                  href="mailto:wecare@mgetenergy.com"
                  className="text_light"
                >
                  wecare@mgetenergy.com
                </Link>
              </li>
            </ul>
            {/* <div className={styles.form}>
              <input type="text" placeholder="Your email address" />
              <div className={styles.mail_icon}>
                <SiMinutemailer />
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p>
            Copyright &copy; {new Date().getFullYear()} Maxoptimus Green Energy
            Technology Pvt Ltd . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
