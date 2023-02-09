// import Swiper core and required modules
import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '@/styles/Testimonials.module.css';
import { FaQuoteRight } from 'react-icons/fa';
import image1 from '../public/images/testimonials/1.jpg';
import image2 from '../public/images/testimonials/2.jpg';
import image3 from '../public/images/testimonials/3.jpg';
import image4 from '../public/images/testimonials/4.jpg';
import image5 from '../public/images/testimonials/5.jpg';
import image6 from '../public/images/testimonials/6.jpg';
import image7 from '../public/images/testimonials/7.jpg';
import image8 from '../public/images/testimonials/8.jpg';
import image9 from '../public/images/testimonials/9.jpg';
import Image from 'next/image';

const Testinomials = () => {
  const testinomials = [
    {
      icon: <FaQuoteRight />,
      description:
        'For our cold storage we needed solar power system that is leak proof /penetration less installation on roof. MAXOPTIMUS provided leak proof installation using ballast structure no piercing in the roof and 120 Kwp system installed flat within 3 weeks of time. MAXOPTIMUS is committed to customization, the best solar installation company.',
      name: 'Mr. Arun Verma',
      info: 'Director, M/s Jiwani Devi Sheetgrah, Iglas, Aligarh, Uttar Pradesh',
      img: image1,
    },
    {
      icon: <FaQuoteRight />,
      description:
        'Our automated and temperature-controlled poultry farm at Khetalpur has machinery from BIG Dutchman, being in remote place and having frequent power outage had installed 200 KVA diesel generators. MAXOPTIMUS has design and development ground-mounted hybrid solar system - 125 KWp with 360 Kwh of battery storage, eliminating the need of diesel generator, we have not switched on the diesel generator from the day solar power system has been installed. Bringing a saving of Rs 175000 per month for diesel, saving us from frequent grid outage and 40% electricity bill reduction.',
      name: 'Mr. Zafar Mahmood',
      info: 'Director , M/s Ashrafi Poultry, Khetalpur, Aurai- Bhadohi',
      img: image2,
    },
    {
      icon: <FaQuoteRight />,
      description:
        'We have 20 kw grid-tied solar power system installed by MAXOPTIMUS, 5 years back July 2016. System has been running since than with 100% uptime. One does not need to look further than MAXOPTIMUS for solar power system. Exceptional system integrator, system has delivered more than promised by MAXOPTIMUS.',
      name: 'Dr Ritesh Garg',
      info: 'MD-SCRI, MAHENDRU ENCLAVE, NEW DELHI',
      img: image3,
    },
    {
      icon: <FaQuoteRight />,
      description:
        'We have 7 Kw grid-tied solar power system installed by MAXOPTIMUS, the only bill that we have received from the day netmeter has been installed is the meter fixed charges. The system was installed in flat 2 days, and the rate at electricity bill saving, we will be able to recover our investment cost in 3 years 7 months. The best part of MAXOPTIMUS is they supply plenty of information to make fully informed choice.',
      name: 'Mr. Alok Gupta',
      info: 'DAdvocate Allahabad High Court, Ramanad Nagar , Allapur, Prayagraj',
      img: image4,
    },
    {
      icon: <FaQuoteRight />,
      description:
        "We have offgrid solar power (battery) system installed by MAXOPTIMUS and now it's more than 2 years. Our Yatri Niwas 40 rooms is powered by the solar system installed by MAXOPTIMUS, the backup allows to save solar power and then access it on demand. They offer sophisticated solar power solution and the best service at the lowest price.",
      name: 'Mr. R C Garg',
      info: 'Ex-IPS Officer, President Shri Jambuswami Taposthali Jan Kalyan Sanstha (Regd), Boulkhera, Bharatpur- Rajasthan',
      img: image5,
    },
    {
      icon: <FaQuoteRight />,
      description:
        "We are electrical LT Panel manufacturer for the past 22 years have been looking for solar power system, checked with some of the well-known brand finally settled with solar system from MAXOPTIMUS. 11 Kwp system installed by MAXOPTIMUS and now it's more than 2 years (July 2019), have an average saving of Rs 12300 per month and 100% uptime. At this rate of saving, we should be able to have ROI within 3 years 2 month. System installed by MAXOPTIMUS have been delivering more than they have committed. This is one of the best solar installation companies to turn to for solar power solutions that are truly customized with customer requirement in mind.",
      name: 'Mr Hemant Sheoraut',
      info: 'Director, M/s efab Power Pvt Ltd, Site V , UPSIDC, Kasna, Greater Noida',
      img: image6,
    },
    {
      icon: <FaQuoteRight />,
      description:
        "It's almost 5 years + years offgrid (battery backup) system installed by MAXOPTIMUS, since then I have never experienced electricity outage, solar power system has reduced electricity bill by almost 50%.",
      name: 'Dr. Yogendra Mittal',
      info: 'Director, Mittal Pathology Lab, Modinagar- Uttar Pradesh',
      img: image7,
    },
    {
      icon: <FaQuoteRight />,
      description:
        'Ours being carpet export house need to deliver goods under strict deadline, with electricity outage and diesel generator pollution we had been looking for alternative electricity solution. After searching for a good solar solution provider, we freezed on hybrid solar solution from MAXOPTIMUS their approach makes extremely simple to select custom hybrid solar. Having installed 90 Kwp with 240 Kw battery bank, enough to take care of our day requirement for our carpet manufacturing unit and serve our purpose for night lighting. The system provided by them is modular (can be expanded) to serve our future need. MAXOPTIMUS is committed to simplicity, superior workmanship and system that fit ones need.',
      name: 'Mr. Kumar Mahmood',
      info: 'Director-Shimnan Rugs',
      img: image8,
    },
    {
      icon: <FaQuoteRight />,
      description:
        'For farm house we had constructed in our village we had been scouting for solar power system, since in our area is troubled with frequent power cuts we did not wanted to have grid supply. We have offgrid system installed by MAXOPTIMUS, simple to use and maintain at very reasonable cost, providing sustainable source of energy.',
      name: 'Mr Dharam Singh Rathore',
      info: 'Ex-Deputy Commisioner, Income Tax Dept, Baqalpur, Farah, Mathura',
      img: image9,
    },
  ];
  return (
    <section className={styles.testinomials__container}>
      <div className="container">
        <header>
          <h5>TESTINOMIAL</h5>
          <h2>Testinomails</h2>
        </header>
        <Swiper
          modules={[Pagination]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className={styles.testinomials__container__content}
        >
          {testinomials.map((item, index) => {
            const { icon, img, description, name, info } = item;
            return (
              <SwiperSlide key={index}>
                <div className={styles.info}>
                  <FaQuoteRight className={styles.info__icon} />
                  <p>{description}</p>
                </div>
                <div className={styles.author}>
                  <div className={styles.author__img}>
                    <Image
                      src={img}
                      alt={name}
                      height={'auto'}
                      width={'auto'}
                      layout={'responsive'}
                    />
                  </div>
                  <div className={styles.author__info}>
                    <h2>{name}</h2>
                    <p>{info}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Testinomials;
