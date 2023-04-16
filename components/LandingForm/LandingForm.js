import styles from './LandingForm.module.css';
import image from '@/public/images/about/about1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const LandingForm = () => {
  const { isOfficeOpened } = useSelector((store) => store.content);

  // bg color for office opened or not
  const bg = {
    backgroundColor: isOfficeOpened ? '#009300' : 'red',
  };

  return (
    <div className={styles.landingForm}>
      <div className={`container ${styles.landingForm__container}`}>
        <div className={styles.landingForm__container_form}>
          <h5>GET IN TOUCH</h5>
          <h2>Submit Enquiry For Solar Project</h2>
          <form className={styles.form}>
            <div class={styles.input_box}>
              <input
                type="text"
                required
                placeholder=" "
                id="name"
                className={styles.input}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div class={styles.input_box}>
              <input
                type="email"
                required
                placeholder=" "
                id="email"
                className={styles.input}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className={styles.form_inputs}>
              <div class={styles.input_box}>
                <input
                  type="tel"
                  required
                  placeholder=" "
                  id="number"
                  className={styles.input}
                />
                <label htmlFor="number">Phone Number</label>
              </div>
              <div class={styles.input_box}>
                <input
                  type="text"
                  required
                  placeholder=" "
                  id="address"
                  className={styles.input}
                />
                <label htmlFor="address">Address</label>
              </div>
            </div>
            <div className={styles.form_inputs}>
              <div class={styles.input_box}>
                <input
                  type="text"
                  required
                  placeholder=" "
                  id="city"
                  className={styles.input}
                />
                <label htmlFor="city">City</label>
              </div>
              <div class={styles.input_box}>
                <input
                  type="number"
                  required
                  placeholder=" "
                  id="postalCode"
                  className={styles.input}
                />
                <label htmlFor="postalCode">Postal Code</label>
              </div>
            </div>

            <div class={styles.input_box}>
              <input
                type="text"
                required
                placeholder=" "
                id="country"
                className={styles.input}
              />
              <label htmlFor="country">Country</label>
            </div>

            <div class={styles.radios}>
              <p>
                {' '}
                What can we help you with? (Please select one or more options):
              </p>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="General Inquiry"
                  value="General Inquiry"
                  className={styles.input}
                />
                <label htmlFor="General Inquiry">General Inquiry</label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Solar Panel Installation"
                  value="Solar Panel Installation"
                  className={styles.input}
                />
                <label htmlFor="Solar Panel Installation">
                  Solar Panel Installation
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Solar Panel Maintenance
"
                  value="Solar Panel Maintenance
"
                  className={styles.input}
                />
                <label
                  htmlFor="Solar Panel Maintenance
"
                >
                  Solar Panel Maintenance
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Solar Panel Repair
"
                  value="Solar Panel Repair
"
                  className={styles.input}
                />
                <label
                  htmlFor="Solar Panel Repair
"
                >
                  Solar Panel Repair
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Solar Battery Storage

"
                  value="Solar Battery Storage

"
                  className={styles.input}
                />
                <label
                  htmlFor="Solar Battery Storage

"
                >
                  Solar Battery Storage
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Other


"
                  value="Other


"
                  className={styles.input}
                />
                <label
                  htmlFor="Other


"
                >
                  Other
                </label>
              </div>
            </div>

            <div class={styles.input_box}>
              <textarea
                rows="5"
                required
                placeholder=" "
                id="message"
                className={styles.input}
              ></textarea>
              <label htmlFor="message">Your message here</label>
            </div>

            <div class={styles.radios}>
              <p>
                {' '}
                How did you hear about us? (Please select one or more options):
              </p>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Internet search
"
                  value="Internet search
"
                  className={styles.input}
                />
                <label
                  htmlFor="Internet search
"
                >
                  {' '}
                  Internet search
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Social media
"
                  value="Social media
"
                  className={styles.input}
                />
                <label
                  htmlFor="Social media
"
                >
                  Social media
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Referral from a friend or family member
"
                  value="Referral from a friend or family member
"
                  className={styles.input}
                />
                <label
                  htmlFor="Referral from a friend or family member
"
                >
                  Referral from a friend or family member
                </label>
              </div>
              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Referral from a business or organization

"
                  value="Referral from a business or organization

"
                  className={styles.input}
                />
                <label
                  htmlFor="Referral from a business or organization

"
                >
                  Referral from a business or organization
                </label>
              </div>

              <div className={styles.single_radio}>
                <input
                  type="checkbox"
                  required
                  placeholder=" "
                  id="Other


"
                  value="Other


"
                  className={styles.input}
                />
                <label
                  htmlFor="Other


"
                >
                  Other
                </label>
              </div>
            </div>

            <p>
              By submitting this form, you agree to be contacted by Mgetenergy
              regarding your inquiry
            </p>

            <button>Submit Now</button>
          </form>
        </div>
        <div className={styles.map}>
          <div className={styles.contact_info}>
            <h2>Contact</h2>
            <ul>
              <li>
                <FiPhoneCall className={styles.contact_icon} />
                <Link href="tel:+91 98218 76325" className="text_light">
                  +91 98218 76325
                </Link>
              </li>
              <li>
                <FiPhoneCall className={styles.contact_icon} />
                <Link href="tel:+91 98186 66325" className="text_light">
                  +91 98186 66325
                </Link>
              </li>
              <li>
                <BsEnvelope className={styles.contact_icon} />
                <Link
                  href="mailto:wecare@mgetenergy.com"
                  className="text_light"
                >
                  wecare@mgetenergy.com
                </Link>
              </li>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14035.071692973914!2d77.5413084!3d28.4262588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc030df032359%3A0x67dfe352f861e0f6!2sMaxoptimus%20Green%20Energy%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1681651990325!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={styles.officeInfo}>
            <AiOutlineClockCircle className={styles.contact_icon} />
            <span className="text_light"> 09:30am - 5:30pm</span>
            <p className="text_light">Monday to Saturday</p>
            <div className={styles.status}>
              <h3>{isOfficeOpened ? 'Open' : 'Closed'}</h3>
              <div style={bg} className={styles.circle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingForm;
