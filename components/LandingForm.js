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
              <div class={styles.input_box}>
                <input
                  type="text"
                  required
                  placeholder=" "
                  id="firstN"
                  className={styles.input}
                />
                <label htmlFor="firstN">First name</label>
              </div>
              <div class={styles.input_box}>
                <input
                  type="text"
                  required
                  placeholder=" "
                  id="lastN"
                  className={styles.input}
                />
                <label htmlFor="lastN">Last name</label>
              </div>
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
              <textarea
                rows="5"
                required
                placeholder=" "
                id="message"
                className={styles.input}
              ></textarea>
              <label htmlFor="message">Your message here</label>
            </div>
            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LandingForm;
