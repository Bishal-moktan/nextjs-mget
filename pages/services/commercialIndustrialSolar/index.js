import Content from '@/components/Content/Content';
import Scroll from '@/components/ScrollToTop/ScrollToTop';
import SideBar from '@/components/sidebar/sidebar';
import { navLinksIndex } from '@/data/navbarData';
import services from '@/data/services';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const commercialIndustrialSolar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.services));
  }, []);
  const keywords =
    'Solar power solution, Commercial and industrial (C&I), Solar panels, Rooftop installation, Ground-mounted installation, Inverter, Direct current (DC) electricity, Alternating current (AC) electricity, Excess electricity, Battery storage, Net metering, Net billing, Cost savings, Energy independence, Environmental benefits, Increased energy efficiency, Sustainability, Grid-Tied Solar Systems, Off-Grid Solar Systems, Hybrid Solar Systems, Solar Carport Systems.';

  const metaDescription =
    'Explore the advantages of solar power solutions for commercial and industrial (C&I) use, from cost savings and energy independence to improved sustainability and reduced environmental impact. Understand the different types of C&I solar power systems, such as grid-tied, off-grid, hybrid, and solar carport systems, and learn how they can help businesses and industrial facilities meet their energy needs while reducing their reliance on traditional utility companies.';
  const content = (
    <div>
      <p>
        A solar power solution for commercial and industrial (C&I) use typically
        involves installing a larger solar power system than what is used for
        residential properties. These systems can be designed to meet the
        specific energy needs of a business or industrial facility.
      </p>
      <p className="margin">
        The solar panels used for C&I applications are rooftop or
        ground-mounted, in case of ground mounted they are installed on the
        ground rather than on the roof of the building. These systems are
        typically larger in size and can generate more electricity than a
        typical residential solar power system.
      </p>
      <p className="margin">
        In addition to the panels, a C&I solar power system includes an
        inverter, which converts the direct current (DC) electricity produced by
        the panels into alternating current (AC) electricity, which is used by
        most commercial and industrial facilities. The excess electricity can be
        stored in batteries or sent back to the grid through a process called
        net metering or net billing.
      </p>
      <p className="margin">
        A solar power solution for C&I use can help commercial and industrial
        facilities to reduce their energy costs, increase their energy
        independence and reduce their environmental impact. It can also help
        them to meet their sustainability goals, and in some cases, they can
        even sell the excess energy they generate back to the grid.
      </p>
      <p className="margin">
        Commercial and industrial solar power systems can be divided into the
        following types:
      </p>
      <ul>
        <li className="margin">
          <strong> Grid-Tied Solar Systems:</strong> This type of system is
          connected to the electrical grid and works similarly to the grid-tied
          residential systems, providing electricity to the building while also
          sending excess power back to the grid. Advantages: Reduced electricity
          bills, potential earnings from sending excess power back to the grid,
          no need for battery storage. Disadvantages: Dependence on the
          electrical grid, system doesn't work during power outages.
        </li>
        <li className="margin">
          <strong>Off-Grid Solar Systems:</strong> This type of system is
          independent of the electrical grid and relies on battery storage for
          power. Advantages: Complete energy independence, no dependence on the
          electrical grid, ability to work during power outages. Disadvantages:
          High cost of battery storage, requires regular maintenance, may be
          less efficient.
        </li>
        <li className="margin">
          <strong> Hybrid Solar Systems:</strong> This type of system combines
          elements of grid-tied and off-grid systems, allowing for both grid
          connection and battery storage. Advantages: Can work during power
          outages, reduced dependence on the electrical grid, potential earnings
          from sending excess power back to the grid. Disadvantages: Higher cost
          than a simple grid-tied system, requires regular battery maintenance.
        </li>
        <li className="margin">
          <strong> Solar Carport Systems:</strong> These are large, freestanding
          structures that provide shading for vehicles while also generating
          solar power. Advantages: Can generate substantial amounts of power,
          can provide shading for vehicles, can serve as a source of renewable
          energy. Disadvantages: Can be expensive to build, may not be suitable
          for all types of businesses and industrial facilities.
        </li>
      </ul>
      <p>
        The choice of system will depend on the specific energy needs, budget,
        and location of the commercial or industrial facility. A professional
        energy consultant can help determine the best option.
      </p>
      <p>
        Some of the benefit of solar power for Commerical & Industrial solar:
      </p>
      <ul>
        <li className="margin">
          <FaCheckCircle />
          <strong> Cost savings: </strong> Solar power can significantly reduce
          or even eliminate electricity bills for commercial and industrial
          facilities, as the power generated by the panels can be used to meet
          their energy needs.
        </li>
        <li className="margin">
          <FaCheckCircle />
          <strong> Energy independence:</strong> With a solar power system, a
          commercial or industrial facility can produce its own electricity,
          reducing dependence on traditional utility companies.
        </li>
        <li className="margin">
          <FaCheckCircle />
          <strong> Environmental benefits:</strong> Solar power is a clean,
          renewable energy source that does not produce any emissions or
          pollutants, making it an environmentally friendly option for
          commercial and industrial facilities.
        </li>
        <li className="margin">
          <FaCheckCircle />
          <strong>Increased energy efficiency:</strong> By generating their own
          electricity, commercial and industrial facilities can reduce the need
          for energy from fossil fuels, resulting in increased energy
          efficiency.
        </li>
        <li className="margin">
          <FaCheckCircle />
          <strong>Improved sustainability:</strong> A solar power system can
          help a commercial or industrial facility to meet their sustainability
          goals and demonstrate their commitment to environmental
          responsibility.
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <Head>
        <title>COMMERCIAL AND INDUSTRIAL SOLAR SYSTEM INSTALLATION</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Content
          title={'Commercial & Industrial Solar'}
          description={content}
        />
        <SideBar items={services} name="Services" />

        <Scroll />
      </main>
    </>
  );
};
export default commercialIndustrialSolar;
