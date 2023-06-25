import Head from 'next/head';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CollapseSideBar from '@/components/CollapseSideBar/CollapseSideBar';
import SideBar from '@/components/sidebar/sidebar';
import styles from '@/styles/Solutions.module.css';
import solutions from '@/data/solutions';

const Solutions = () => {
  const { metaContent, title } = useSelector((store) => store.content);

  return (
    <>
      <Head>
        <title>{title} - Solutions</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className={styles.container}>
        <div className={styles.title}>
          <h2>Solutions Offerred</h2>
        </div>
        <p className="margin">
          There are several types of solar power systems, each with its unique
          features and applications. Some of the most common types include:
        </p>
        <ul>
          <li>
            <FaCheckCircle />
            <strong>Grid-Tied Solar System:</strong>
            These are connected to the electricity grid and provide energy to
            homes and businesses while also sending excess energy back to the
            grid. They rely on the grid for power during night time or cloudy
            days.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Off-Grid Solar System:</strong>
            These are not connected to the electricity grid and rely entirely on
            solar panels, batteries, and inverters to provide power to homes,
            businesses, and remote locations.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Hybrid Solar System:</strong>
            These combine features of grid-tied and off-grid systems, allowing
            homeowners to use solar power and also draw from the grid when
            necessary.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar Water Heating System:</strong>
            These use solar panels to heat water for household or industrial
            use, reducing the reliance on traditional heating methods.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar Pool Heating System:</strong>
            These use solar panels to heat swimming pool water, reducing energy
            costs and promoting energy efficiency.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar-Powered Water Pumping System:</strong>
            These are used to pump water in rural areas, providing a sustainable
            source of water for irrigation, livestock, and household needs.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar Street Lighting System:</strong>
            These use solar panels and batteries to provide light in parks,
            parking lots, and remote or rural areas where access to the
            electricity grid is limited. Each of these types of solar power
            systems has its own advantages and disadvantages, and the most
            suitable type depends on the energy needs, location, and budget of
            the user.
          </li>
        </ul>
        <p className="margin">
          Each of these types of solar power systems has its own advantages and
          disadvantages, and the most suitable type depends on the energy needs,
          location, and budget of the user.
        </p>
        <CollapseSideBar name="Solutions" />
        <SideBar items={solutions} name="Solutions" />
      </main>
    </>
  );
};
export default Solutions;
