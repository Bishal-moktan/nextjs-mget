import Head from 'next/head';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '@/styles/Services.module.css';

const solutions = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY</title>
        <meta
          name="description"
          content="Best Solar power system, services offered"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className="container">
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
            <strong>Grid-Tied Solar Systems:</strong>
            These are connected to the electricity grid and provide energy to
            homes and businesses while also sending excess energy back to the
            grid. They rely on the grid for power during night time or cloudy
            days.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Off-Grid Solar Systems:</strong>
            These are not connected to the electricity grid and rely entirely on
            solar panels, batteries, and inverters to provide power to homes,
            businesses, and remote locations.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Hybrid Solar Systems:</strong>
            These combine features of grid-tied and off-grid systems, allowing
            homeowners to use solar power and also draw from the grid when
            necessary.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar Water Heating Systems:</strong>
            These use solar panels to heat water for household or industrial
            use, reducing the reliance on traditional heating methods.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar Pool Heating Systems:</strong>
            These use solar panels to heat swimming pool water, reducing energy
            costs and promoting energy efficiency.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar-Powered Water Pumping Systems:</strong>
            These are used to pump water in rural areas, providing a sustainable
            source of water for irrigation, livestock, and household needs.
          </li>
          <li>
            <FaCheckCircle />
            <strong>Solar Street Lighting Systems:</strong>
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
      </main>
    </>
  );
};
export default solutions;
