import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { BsEnvelope } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import Link from 'next/link';
import logo from '@/public/images/logo-dark.png';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__socials}>
            <Image src={logo} alt="logo" className={styles.logo} />
            <p>
              Maxoptimus is a turnkey, renewable energy solution provider;
              providing cleaner, greener electricity solutions that is most
              reliable and cost effective "Unlimited Clean Energy Forever".
            </p>
            <div className={styles.icons}>
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
          <div className={styles.footer__services}>
            <h2>Services Offering</h2>
            <ul>
              <li className="text-light">Solar for Housing</li>
              <li className="text-light">Solar for Industries</li>
              <li className="text-light">Solar for Agriculture</li>
              <li className="text-light">Solar for Healthcare</li>
              <li className="text-light">Solar for IT Company</li>
              <li className="text-light">Solar for Institutes</li>
            </ul>
          </div>
          <div className={styles.footer__contact}>
            <h2>Contact Information</h2>
            <ul>
              <li>
                <SlLocationPin className={styles.footer__contact_icon} />
                <span className="text-light">Greater Noida - 201306, UP</span>
              </li>
              <li>
                <SlLocationPin className={styles.footer__contact_icon} />
                <span className="text-light">Mumbai - 400059, MH</span>
              </li>
              <li>
                <FiPhoneCall className={styles.footer__contact_icon} />
                <a href="tel:+91 98186 66325" className="text-light">
                  +91 98186 66325
                </a>
              </li>
              <li>
                <FiPhoneCall className={styles.footer__contact_icon} />
                <a href="tel:+91 98186 66325" className="text-light">
                  +91 98186 66325
                </a>
              </li>
              <li>
                <BsEnvelope className={styles.footer__contact_icon} />
                <a href="mailto:wecare@mgetenergy.com" className="text-light">
                  wecare@mgetenergy.com
                </a>
              </li>
              <li>
                <AiOutlineClockCircle className={styles.footer__contact_icon} />
                <span className="text-light">Opening Hours: 09:30 - 18:00</span>
              </li>
            </ul>
          </div>
          <div className={styles.footer__newsletter}>
            <h2>News Letter</h2>
            <p>
              To suscribe our newslaters and latest updates, enter your email
              address.
            </p>
            <div className={styles.form}>
              <input type="text" placeholder="Your email address" />
              <div className={styles.mail_icon}>
                <SiMinutemailer />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className="footer__bottom-copyright">
            <p>
              &copy; ALL Reserved | MAXOPTIMUS GREEN ENERGY TECHNOLOGY PVT. LTD
            </p>
          </div>
          <div className={styles.footer__bottom_links}>
            <Link href="/">Services</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Testinomial</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
