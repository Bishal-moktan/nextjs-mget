import styles from './Partners.module.css';
import image1 from '@/public/images/client/partner1.webp';
import image2 from '@/public/images/client/partner2.webp';
import image3 from '@/public/images/client/partner3.webp';
import image4 from '@/public/images/client/partner4.webp';
import image5 from '@/public/images/client/partner5.webp';
import image6 from '@/public/images/client/partner6.webp';
import image7 from '@/public/images/client/partner7.webp';
import image10 from '@/public/images/client/partner10.webp';
import image11 from '@/public/images/client/partner11.webp';
import image12 from '@/public/images/client/partner12.webp';
import image14 from '@/public/images/client/partner14.webp';
import image15 from '@/public/images/client/partner15.webp';
import image16 from '@/public/images/client/partner16.webp';
import image17 from '@/public/images/client/partner17.webp';
import image18 from '@/public/images/client/partner18.webp';
import image13 from '@/public/images/client/efab.webp';
import tecumseh from '@/public/images/client/tecumseh.webp';
import k_raheja from '@/public/images/client/k_raheja.webp';
import kissui from '@/public/images/client/kissui.webp';
import lodha from '@/public/images/client/lodha.webp';
import steadfast from '@/public/images/client/steadfast.png';
import arihant from '@/public/images/client/arihant.png';
import veggie from '@/public/images/client/veggie.jpg';
import agnitio from '@/public/images/client/agnitio.jpg';

import Image from 'next/image';

const Partners = () => {
  return (
    <section className={styles.container__client} id="clients">
      <div className="container">
        <div className={styles.header}>
          <h2>Work Done</h2>
        </div>

        <div className={styles.container__client_images}>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image2}
              alt="GAS AUTHORITY OF INDIA LTD - GAIL"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image1}
              alt="INDIAN AIRFORCE"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image3}
              alt="INLAND WATERWAYS AUTHORITY OF INDIA"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image4}
              alt="Indian Oil Corporation"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image5}
              alt="NARMADA HYDRO-ELECTRIC DEVELOPMENT CORPORATION"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image6}
              alt="Nuclear Power Corporation of India Limited"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image7}
              alt="Shivam Diagnostics & Cancer Research Institute - DELHI"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image10}
              alt="NXP INDIA PVT LTD, SECTOR 16A , NOIDA, UTTAR PRADESH"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image11}
              alt="KAPIL MUNI AGRO FOODS PVT LTD, BEWAR MAINPURI"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image12}
              alt="BEBE FOODS, SITE V , GREATER NOIDA, UTTAR PRADESH"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image13}
              alt="E-FAB POWER CONTROLS PVT LTD, SITE V , GREATER NOIDA, UTTAR PRADESH"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image14}
              alt={`Directorate of Geology & Mining, 	Government of Maharashtra				
27 "KHANIJ BHAVAN", CEMENT ROAD, SHIVAJI NAGAR,				
NAGPUR- 440010, MAHARASHTRA`}
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image15}
              alt="Magicrete Building Solutions- JHAJJHAR HARYANA"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image16}
              alt="LIBRAL TRADERS PVT LTD, OKHLA PHASE 2 NEW DELHI"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image17}
              alt="RAGHUVEER SINGH RAJKIYA MAHAVIDYALAY - LALITPUR, UTTAR PRADESH"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={image18}
              alt="KAPIL MMUNI CHILDRENS ACADEMY- BEWAR MAINPURI - UTTAR PRADESH"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={tecumseh}
              alt="Tecumseh Products India Pvt Ltd - BALLABGARH FARIDABAD- HARYANA"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={lodha}
              alt="MACROTECH DEVELOPERS- MUMBAI, MAHARASHTRA"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={k_raheja}
              alt="K RAHEJA CORP"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={kissui}
              alt="KISSUI METALIKS & STEELS PVT LTD							
 BAHADURGARH, HARYANA"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={steadfast}
              alt="STEADFAST MEDISHIELD"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={arihant}
              alt="Arihant Cold Storage"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={veggie}
              alt="Veggie TM"
            />
          </div>
          <div className={styles.image}>
            <Image
              sizes="(min-width: 1000px) 128px, 192px"
              src={agnitio}
              alt="Agnitio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;
