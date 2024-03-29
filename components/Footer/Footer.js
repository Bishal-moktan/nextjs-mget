import Image from 'next/image';
import { FaFacebook, FaYoutube, FaTwitter, FaBars } from 'react-icons/fa/index';
import { GrLinkedin } from 'react-icons/gr/index';
import { BsEnvelope } from 'react-icons/bs/index';
import { FiPhoneCall } from 'react-icons/fi/index';
import { SlLocationPin } from 'react-icons/sl/index';
import { AiOutlineClockCircle } from 'react-icons/ai/index';
import Link from 'next/link';
import logo from '@/public/images/main-logo.svg';
import email from '@/public/images/footerEmail.png';
import styles from './Footer.module.css';
import routes from '@/data/routes';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__socials}>
            <Link href={'/'} className={styles.img__container}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </Link>

            <div className={styles.icons}>
              <a
                href="https://www.facebook.com/mgetenergy"
                aria-label="Follow us on Facebook"
                target="_blank"
              >
                <FaFacebook className="fb_icon" />
              </a>
              <a
                href="https://twitter.com/MGETEnergy"
                target="_blank"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="twitter_icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/mgetenergy"
                target="_blank"
                aria-label="Follow us on LinkedIn"
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
          <div>
            <h3>Quick links</h3>
            <ul>
              <li>
                <Link className="text_light" href={routes.about}>
                  About us
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.solutions}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.services}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.testimonials}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="text_light" href={'/blogs'}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.contact}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__services}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link className="text_light" href={routes.housing}>
                  Solar for Housing
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.industry}>
                  Solar for Industries
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.agriculture}>
                  Solar for Agriculture
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.healthCare}>
                  Solar for Healthcare
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.company}>
                  Solar for IT industry
                </Link>
              </li>
              <li>
                <Link className="text_light" href={routes.institute}>
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
                <span className={`text_light ${styles.location}`}>
                  J26, Ground Floor, Site V , Kasna Industrial Area, Greater
                  Noida-201310, Uttar Pradesh
                </span>
              </li>
              <li>
                <SlLocationPin className={styles.footer__contact_icon} />
                <span className={`text_light ${styles.location}`}>
                  B18/a Hindsourashtra Industries Co-op Soc Ltd, Gr Floor,
                  Andheri-kurla Road, Andheri- East, Mumbai 400 059, Maharashtra
                </span>
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
                <Link
                  href="tel:+91 98218 76325"
                  className="text_light"
                  aria-label="Our phone number: +91 98218 76325"
                >
                  +91 98218 76325
                </Link>
              </li>
              <li>
                <FiPhoneCall className={styles.footer__contact_icon} />
                <Link
                  href="tel:+91 98186 66325"
                  className="text_light"
                  aria-label="Our phone number: +91 98186 66325"
                >
                  +91 98186 66325
                </Link>
              </li>
              <li>
                <BsEnvelope className={styles.footer__contact_icon} />
                <Link
                  href="mailto:wecare@mgetenergy.com"
                  aria-label="Our email"
                >
                  {/* wecare@mgetenergy.com */}
                  <Image src={email} className={styles.email} alt="Our email" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p>
            Copyright &copy; {new Date().getFullYear()} Maxoptimus Green Energy
            Technology Pvt Ltd . All rights reserved
          </p>
          <p>
            {' '}
            <Link className="text_light" href={routes.privacyPolicy}>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
