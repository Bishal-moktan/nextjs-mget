import { FaCheckCircle, FaFilePdf, FaPhoneAlt } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'next/link';
import styles from '@/styles/Content.module.css';
import Image from 'next/image';
import image1 from '@/public/images/about/about10.webp';
const Content = ({ title, img, description, items }) => {
  return (
    <div className="container">
      <div className={`${styles.content__container}`}>
        <div className={styles.content__container_desc}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.container__image}>
            <Image src={img} alt={title} />
          </div>
        </div>
        <div className="content__container-resources">
          <div className={styles.content__container_navigator}>
            {items?.map((item, index) => {
              return (
                <div key={index}>
                  <h3>
                    <Link
                      to={`/${item.path}`}
                      className={styles.navigate_title}
                    >
                      {item.title}{' '}
                    </Link>{' '}
                  </h3>
                  <MdKeyboardArrowRight />
                </div>
              );
            })}
          </div>

          <div className={styles.content__container_contact}>
            <div className={styles.phone_icon}>
              <FaPhoneAlt />
            </div>
            <h2>Have any Questions? </h2>
            <h2>Call us Today!</h2>
            <a href="tel:+91 98218 76325">+91 98218 76325</a>
          </div>

          <div className={styles.content__container_brochures}>
            <h2>Brochures</h2>
            <p>
              For more information about the projects and services, you can
              click here:
            </p>
            <button>
              Download Now <FaFilePdf />{' '}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content__description}>
        <h1>Why MAXOPTIMUS Solar System?</h1>
        <p>
          Despite the growing demand for clean and renewable energy, many
          individuals and businesses face barriers in adopting solar power
          systems, including lack of access to financing, lack of understanding
          of the technology and benefits, and difficulty in navigating the
          complex process of design, installation, and maintenance. As a solar
          power company, Mgetenergy aim to address these challenges and make it
          easy for our customers to access and utilize solar power, in order to
          promote a sustainable future and reduce dependence on fossil fuels.
          Mgetenergy designs, installs, and maintains systems that convert
          sunlight into electricity. These systems are made up of solar panels,
          an inverter, and other electrical components. The solar panels are
          typically installed on rooftops or in open areas and convert sunlight
          into direct current (DC) electricity. The inverter then converts the
          DC electricity into alternating current (AC) electricity, which is the
          type of electricity that is used in homes and businesses.
          <div className={styles.container__image}>
            <Image
              src={image1}
              alt={
                'mgetenegry, man on the solar installing solar panel on the roof'
              }
            />
          </div>
          Mgetenergy will typically conduct a site assessment to determine the
          best location and orientation for the solar panels to optimize energy
          production. Then design the system and install the panels, wiring, and
          other electrical components. After installation, the Mgetenergy will
          typically provide ongoing maintenance and monitoring to ensure the
          system is operating at optimal efficiency. In addition to designing
          and installing solar power systems, Mgetenergy also provide services
          such as energy storage solutions, energy management systems and
          consulting on energy efficiency. We also offer financing options -
          power purchase agreements (PPAs) to help customers afford the initial
          cost of the system. Mgetenergy help’s to promote a greener future and
          empower communities to produce their own electricity, improving energy
          independence and reducing environmental impact What sets Mgetenrgy
          solar power system company apart from others is our commitment to
          providing personalized, high-quality service to each and every
          customer. We understand that every home and business has unique energy
          needs, and we work closely with our customers to design custom solar
          power solutions that meet those needs. Our mission at Mgetenergy is to
          provide reliable, sustainable, and cost-effective solar power
          solutions to homes and businesses, while reducing dependence on fossil
          fuels and promoting a greener future. We believe that solar power
          system should be accessible to everyone and our goal is to make that a
          reality. Our flagship service is providing solar power solution be it
          ongrid, offgrid, hybrid any size be it 1KW to utility scale.
        </p>
        <h1>
          The unique offering that sets Mgetenergy apart from our competitors,
          is:
        </h1>
        <ul>
          <li>
            <FaCheckCircle className={styles.check__icon} /> Experience and
            expertise: Mgetenergy has extensive experience( its 10 year +) and
            expertise in the solar EPC industry.
          </li>
          <li>
            <FaCheckCircle className={styles.check__icon} /> Efficiency and
            speed: Mgetenergy has proven track record of delivering projects on
            time and within budget.
          </li>
          <li>
            <FaCheckCircle className={styles.check__icon} />
            Quality workmanship: Mgetenrgy is known for delivering high-quality
            workmanship and utilizing industry-best practices.
          </li>
          <li>
            <FaCheckCircle className={styles.check__icon} /> Customizable
            solutions: Mgetenrgy offers custom solutions for customers based on
            their specific needs and requirements.
          </li>
          <li>
            <FaCheckCircle className={styles.check__icon} /> Strong project
            management: Mgetenergy has a strong project management team that can
            effectively oversee and manage solar projects from start to finish.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Content;
