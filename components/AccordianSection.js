import styles from '@/styles/AccordianSection.module.css';
import Accordian from './Accordian';

const AccordianSection = () => {
  const accordianContent = [
    {
      id: 1,
      title: 'On-Grid Solar Power',
      info: 'Grid-tied systems are the most common type of solar power system. Grid-tied connect to the electric grid, and allow user to use solar as well as electricity provided by the utility. When power demand is higher than the solar panels can provide, electricity from the utility provides the remaining electricity to the solar system. On the other hand , when the solar panels are generating more electricity than the user needs, it sends the excess power to the utility grid. Also, for safety reason when the electricity grid is down, grid-tied systems will not operate.',
    },
    {
      id: 2,
      title: 'Off-Grid Solar Power',
      info: 'An off-grid system is independent of the electric grid, but meets the user’s full electricity demand. To store excess power for use at night or when the system isn’t able to be fulfill electricity demand, a battery is connected, often supported by a back-up generator or other energy source. Due to the complexity and reduced flexibility of off-grid systems, they are most commonly used for remote locations, or to power buildings or equipment with a consistent energy need.',
    },
    {
      id: 3,
      title: 'Hybrid Solar Power',
      info: "A hybrid solar power system fundamentally produces electricity from your solar panels during times of good sunlight or daytime and stores it in a battery energy storage solution. When your battery is fully charged, you can utilize any extra solar power to power your home's appliances. If there is still any excess power left, it can be exported to the government power utility grid. The power backup capability of a hybrid solar system is its most significant advantage. It implies that, even in the event of a power outage, you can continue to use electricity uninterrupted. When your utility grid is shut off, you will use the stored energy in your battery as a source of backup power. All the advantages of a grid-tied system are available with hybrid solar systems, which also offer power backup in the event of a power outage.",
    },
    {
      id: 4,
      title: 'Solar Water Pump',
      info: 'Solar water pumps work on the power produced by solar PV (photovoltaic) panels. Solar energy is converted into electricity by the photovoltaic array, which powers the motor pump system. The pumping system uses ponds, bore wells, open well canals, etc. to pull water. Instead of using fossil fuels or a grid supply, solar water pumps use solar energy to power their motors. We offer a selection of solar water pumps in both DC and AC. These pumps can be used for irrigation, agriculture, livestock, farmhouses, recreational swimming pool circulation pumps, household drinking water supply or pressure boosting, and industrial water supply for enterprises and communities.',
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <section className={styles.info}>
          {accordianContent.map((content) => {
            return <Accordian key={content.id} {...content} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default AccordianSection;
