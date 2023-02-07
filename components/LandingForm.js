import styles from '@/styles/LandingForm.module.css';
import image from '@/public/images/about/about1.webp';
import Image from 'next/image';

const LandingForm = () => {
  return (
    <div className={styles.landingForm}>
      <div className={`container ${styles.landingForm__container}`}>
        <div className={styles.landingForm__image}>
          <Image src={image} alt="solar panel" layout="responsive" />
        </div>
        <div className={styles.landingForm__container_form}>
          <h5>GET IN TOUCH</h5>
          <h2>Submit Enquiry For Solar Project</h2>
          <form className={styles.form}>
            <div className={styles.form_inputs}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="tel" placeholder="Phone Number" required />
            <textarea
              rows="5"
              placeholder="Your message here"
              required
            ></textarea>
            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LandingForm;
