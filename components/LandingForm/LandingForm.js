import styles from './LandingForm.module.css';
import Link from 'next/link';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

const API_PATH = 'http://localhost/test/contact.php';
const LandingForm = () => {
  const { isOfficeOpened } = useSelector((store) => store.content);
  const [loading, setLoading] = useState(false);
  const formIntialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    message: '',
    help: [
      { name: 'help[]', title: 'General Inquiry', isChecked: false },
      { name: 'help[]', title: 'Solar Panel Installation', isChecked: false },
      { name: 'help[]', title: 'Solar Panel Maintenance', isChecked: false },
      { name: 'help[]', title: 'Solar Panel Repair', isChecked: false },
      { name: 'help[]', title: 'Solar Battery Storage', isChecked: false },
      { name: 'help[]', title: 'Other', isChecked: false },
    ],
    reference: [
      { name: 'reference[]', title: 'Internet search', isChecked: false },
      { name: 'reference[]', title: 'Social media', isChecked: false },
      {
        name: 'reference[]',
        title: 'Referral from a friend or family member',
        isChecked: false,
      },
      {
        name: 'reference[]',
        title: 'Referral from a business or organization',
        isChecked: false,
      },
      { name: 'reference[]', title: 'Other', isChecked: false },
    ],
  };
  const [formData, setFormData] = useState(formIntialState);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const selectedHelps = [];
    for (let item of formData.help) {
      if (item.isChecked) {
        selectedHelps.push(item.title);
      }
    }
    const selectedReference = [];
    for (let item of formData.reference) {
      if (item.isChecked) {
        selectedReference.push(item.title);
      }
    }
    const { help, reference, ...finalFormData } = formData;
    finalFormData.help = selectedHelps;
    finalFormData.reference = selectedReference;
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: finalFormData,
    })
      .then((result) => {
        if (result.statusText === 'OK') {
          toast.success('Thank you for contacting us!', {
            position: 'bottom-left',
          });
        }
        setLoading(false);
        setFormData(formIntialState);
      })
      .catch((error) => {
        setLoading(false);
        setFormData(formIntialState);
        toast.warn('Something went wrong', {
          position: 'bottom-left',
        });
      })
      .finally(() => router.replace('/'));
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheckboxChangeHelp = (event) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => {
      const newData = prevFormData.help.map((item) =>
        item.title === value ? { ...item, isChecked: checked } : item
      );
      return { ...prevFormData, help: newData };
    });
  };

  const handleCheckboxChangeReference = (event) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => {
      const newData = prevFormData.reference.map((item) =>
        item.title === value ? { ...item, isChecked: checked } : item
      );
      return { ...prevFormData, reference: newData };
    });
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_box}>
              <input
                type="text"
                required
                placeholder=" "
                id="name"
                name="name"
                className={styles.input}
                onChange={handleChangeText}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className={styles.input_box}>
              <input
                type="email"
                required
                placeholder=" "
                id="email"
                name="email"
                className={styles.input}
                onChange={handleChangeText}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className={styles.form_inputs}>
              <div className={styles.input_box}>
                <input
                  type="tel"
                  required
                  placeholder=" "
                  id="number"
                  name="phone"
                  className={styles.input}
                  onChange={handleChangeText}
                />
                <label htmlFor="number">Phone Number</label>
              </div>
              <div className={styles.input_box}>
                <input
                  type="text"
                  required
                  placeholder=" "
                  id="address"
                  name="address"
                  className={styles.input}
                  onChange={handleChangeText}
                />
                <label htmlFor="address">Address</label>
              </div>
            </div>
            <div className={styles.form_inputs}>
              <div className={styles.input_box}>
                <input
                  type="text"
                  required
                  placeholder=" "
                  id="city"
                  name="city"
                  className={styles.input}
                  onChange={handleChangeText}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className={styles.input_box}>
                <input
                  type="number"
                  required
                  placeholder=" "
                  id="postalCode"
                  name="postalCode"
                  className={styles.input}
                  onChange={handleChangeText}
                />
                <label htmlFor="postalCode">Postal Code</label>
              </div>
            </div>

            <div className={styles.input_box}>
              <input
                type="text"
                required
                placeholder=" "
                id="country"
                name="country"
                className={styles.input}
                onChange={handleChangeText}
              />
              <label htmlFor="country">Country</label>
            </div>

            <div className={styles.radios}>
              <p>
                {' '}
                What can we help you with? (Please select one or more options):
              </p>
              {formData.help.map((item, index) => {
                return (
                  <div className={styles.single_radio} key={index}>
                    <input
                      type="checkbox"
                      placeholder=" "
                      name={item.name}
                      onChange={handleCheckboxChangeHelp}
                      checked={item.isChecked}
                      id={`${item.name}_${index}`}
                      value={item.title}
                      className={styles.input}
                    />
                    <label htmlFor={`${item.name}_${index}`}>
                      {item.title}
                    </label>
                  </div>
                );
              })}
            </div>

            <div className={styles.input_box}>
              <textarea
                rows="5"
                required
                placeholder=" "
                id="message"
                name="message"
                className={styles.input}
                onChange={handleChangeText}
              ></textarea>
              <label htmlFor="message">Your message here</label>
            </div>

            <div className={styles.radios}>
              <p>
                {' '}
                How did you hear about us? (Please select one or more options):
              </p>
              {formData.reference.map((item, index) => {
                return (
                  <div className={styles.single_radio} key={index}>
                    <input
                      type="checkbox"
                      placeholder=" "
                      onChange={handleCheckboxChangeReference}
                      name={item.name}
                      checked={item.isChecked}
                      id={`${item.name}_${index}`}
                      value={item.title}
                      className={styles.input}
                    />
                    <label htmlFor={`${item.name}_${index}`}>
                      {item.title}
                    </label>
                  </div>
                );
              })}
            </div>

            <p>
              By submitting this form, you agree to be contacted by Mgetenergy
              regarding your inquiry
            </p>

            <button disabled={loading}>
              {loading ? 'Sumbitting' : 'Submit Now'}
            </button>
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
