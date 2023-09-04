import Head from 'next/head';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '@/styles/Services.module.css';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Accordian from '@/components/Accordian/Accordian';
import phases from '@/public/svg/services/phases.svg';
import feasibility from '@/public/svg/services/feasibility.svg';
import construction from '@/public/svg/services/construction.svg';
import design from '@/public/svg/services/design.svg';
import testing from '@/public/svg/services/testing.svg';
import maintenance from '@/public/svg/services/maintenance.svg';
import decommissioning from '@/public/svg/services/decommissioning.svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import CollapseSideBar from '@/components/CollapseSideBar/CollapseSideBar';
import SideBar from '@/components/sidebar/sidebar';
import services from '@/data/services';
import { useEffect } from 'react';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import { navLinksIndex } from '@/data/navbarData';

const Services = () => {
  const { title } = useSelector((store) => store.content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.services));
  }, []);
  const metaDescription =
    'Discover the different phases of a solar power system project, from design and engineering to procurement, construction, commissioning, and maintenance. Learn how each phase plays a crucial role in ensuring the successful installation and operation of the solar power system, as well as the safe decommissioning at the end of its life.';
  const keywords =
    'Design phase, Solar power system installation, Site assessment, Feasibility study, Energy consumption analysis, System sizing, Equipment selection, System layout, Permits, Schematics, Commissioning, Testing, Procurement, Construction, Solar panels, Inverter, Charge controller, Batteries, Electrical components, Energy production, Safety features, Financial analysis, Quality control, Maintenance, Monitoring, Repairs, Decommissioning, Dismantling, Restoration.';

  const description = [
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={phases} />
          </span>
          Different phases of solar power system project
        </strong>
      ),
      info: (
        <div>
          <p>
            There are several phases that are typically involved in the
            development of a solar power system project, including:
          </p>
          <ul>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Site Assessment
              and Feasibility Study: This phase involves evaluating the
              potential site for the solar power system, including factors such
              as solar insolation, shading, and electrical infrastructure. A
              feasibility study is also conducted to determine the potential
              size and cost of the system, as well as to identify any potential
              challenges or issues that may need to be addressed.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Design and
              Engineering: During this phase, detailed plans and specifications
              are developed for the solar power system, including the layout of
              the solar panels, the electrical wiring and inverters, and the
              connection to the grid. This phase also includes obtaining any
              necessary permits and approvals.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Procurement and
              Construction: During this phase, the necessary equipment and
              materials are procured and the solar power system is constructed.
              This includes the installation of the solar panels, the electrical
              infrastructure, and any other components of the system.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Commissioning and
              Testing: Once the solar power system is constructed, it is tested
              and commissioned to ensure that it is operating as intended. This
              includes testing the electrical connections, the performance of
              the solar panels, and the overall functionality of the system.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Operations and
              Maintenance: After the solar power system is commissioned, it is
              placed into operation and ongoing maintenance is performed to
              ensure that it continues to operate at optimal performance. This
              includes regular cleaning and inspection of the solar panels,
              monitoring the performance of the system, and making any necessary
              repairs or adjustments.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Decommissioning:
              Once the end of the systems life or after a certain agreement
              period, Decommissioning phase starts. This includes the removal of
              all equipment and materials, and the restoration of the site to
              its original condition.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={feasibility} />
          </span>
          Site Assessment and Feasibility Study phase
        </strong>
      ),
      info: (
        <div>
          {' '}
          <p>
            The Site Assessment and Feasibility Study phase is a crucial step in
            the development of a solar power system. It involves evaluating the
            potential location for the installation and determining if it is
            suitable for a solar power system.
          </p>
          <ul>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Site Selection:
              The first step is to identify potential locations for the solar
              power system. Factors such as the availability of space, proximity
              to the electrical grid, and local regulations are taken into
              account.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Site Survey: Once
              a potential site has been identified, a detailed site survey is
              carried out to gather information such as topography, shading
              patterns, and orientation of the site. This information is used to
              determine the optimal orientation and tilt of the solar panels.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Solar Resource
              Assessment: The solar resource at the site is evaluated to
              determine the average daily solar irradiance, which is a measure
              of the amount of solar energy that reaches the ground. This
              information is used to size the solar power system and calculate
              the expected energy output.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Electrical Grid
              Connection: The electrical grid connection at the site is
              evaluated to determine the feasibility of connecting the solar
              power system to the grid. The capacity of the grid, location of
              substations, and interconnection requirements are taken into
              account.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Environmental and
              Regulatory Review: The environmental impact of the solar power
              system is evaluated, and the necessary permits and approvals are
              obtained. Local zoning regulations, environmental impact
              assessments, and other legal requirements are also taken into
              account.
            </li>
            <li className={styles.margin}>
              <FaCheckCircle className={styles.check__icon} /> Economic
              Feasibility: The financial viability of the solar power system is
              assessed, taking into account the cost of equipment, installation,
              and maintenance, as well as the expected energy savings and
              revenue generated by the system.
            </li>
          </ul>
          <p>
            The results of the Site Assessment and Feasibility Study phase are
            used to determine if the solar power system is viable and whether it
            should be installed at the chosen location. If the results are
            positive, the next step is to proceed with the design and
            installation of the system.
          </p>
        </div>
      ),
    },
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={design} />
          </span>
          Design and Engineering phase of solar power system installation
        </strong>
      ),
      info: (
        <div>
          {' '}
          <p>
            The design and engineering phase of a solar power system
            installation is a crucial step in the overall process. During this
            phase, the necessary information is gathered and analyzed to
            determine the best possible design for the solar power system. This
            includes factors such as the location of the system, the orientation
            and tilt of the solar panels, the type and size of the panels, the
            inverter and other electrical components, and the overall system
            capacity.
          </p>
          <p className={styles.margin}>
            The first step in the design and engineering phase is to perform a
            site assessment. This involves visiting the location where the solar
            power system will be installed and gathering information such as the
            orientation and tilt of the roof or ground area, shading from nearby
            buildings or trees, and the local weather patterns. This information
            is used to determine the optimal orientation and tilt of the solar
            panels to maximize their energy production.
          </p>
          <p className={styles.margin}>
            Next, the size and type of the solar panels and other components are
            selected based on the site assessment and the energy needs of the
            system. The solar panels are typically selected based on their
            efficiency and power output, while the inverter and other electrical
            components are chosen based on their compatibility with the solar
            panels and the overall system capacity.
          </p>
          <p className={styles.margin}>
            Once the design and components have been selected, the engineers
            will create detailed plans and schematics for the installation of
            the solar power system. This includes the placement of the solar
            panels, the routing of electrical cables, and the installation of
            the inverter and other components. These plans and schematics are
            then reviewed and approved by the local authorities and utility
            company to ensure compliance with all necessary regulations and
            requirements.
          </p>
          <p className={styles.margin}>
            Finally, the design and engineering phase concludes with cost
            estimates and financial analysis to determine the feasibility of the
            project. This includes estimating the costs of the solar panels, the
            inverter, and other components, as well as labor costs for
            installation and ongoing maintenance. The financial analysis also
            includes estimating the potential energy savings and return on
            investment for the solar power system.
          </p>
          <p className={styles.margin}>
            Overall, the design and engineering phase of a solar power system
            installation is a critical step in determining the feasibility and
            success of the project, by gathering all the necessary information,
            analyzing it and creating detailed plans and schematics that will
            guide the entire installation process.
          </p>
        </div>
      ),
    },
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={construction} />
          </span>
          Procurement and Construction phase of solar power system installation
        </strong>
      ),
      info: (
        <div>
          <p>
            The procurement and construction phase of a solar power system
            installation is the next step in the process after the design and
            engineering phase. During this phase, the necessary materials and
            equipment are procured and the solar power system is constructed and
            installed on the site
          </p>
          <p className={styles.margin}>
            The first step in the procurement and construction phase is to
            purchase the necessary materials and equipment. This includes the
            solar panels, the inverter and other electrical components, as well
            as any additional materials and equipment required for the
            installation. The purchase of materials and equipment can be done
            through a variety of means, such as through a direct purchase from
            the manufacturer or through a bidding process with multiple
            suppliers.
          </p>
          <p className={styles.margin}>
            Once the materials and equipment have been procured, the
            construction phase begins. This includes the installation of the
            solar panels, the routing of electrical cables, and the installation
            of the inverter and other components. The construction is typically
            done by a team of experienced professionals who have expertise in
            the installation of solar power systems.
          </p>
          <p className={styles.margin}>
            During the construction phase, the engineers and contractors will
            also perform quality control checks to ensure that the installation
            is done correctly and that all components are working properly. This
            includes testing the electrical connections, the power output of the
            solar panels, and the overall function of the system.
          </p>
          <p className={styles.margin}>
            The construction phase concludes with a final inspection and
            commissioning of the solar power system. This includes a thorough
            inspection of the entire system to ensure that it is installed
            correctly and that it meets all necessary regulations and
            requirements. The commissioning process also includes testing the
            system to ensure that it is producing energy as expected and that it
            is properly integrated into the existing electrical grid.
          </p>
          <p className={styles.margin}>
            Overall, the procurement and construction phase of a solar power
            system installation is a critical step in the process as it involves
            the actual physical construction and installation of the system, and
            the procurement of necessary materials and equipment. This phase
            requires experienced professionals and a thorough inspection and
            commissioning process to ensure that the system is installed
            correctly and is producing energy as expected.
          </p>
        </div>
      ),
    },
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={testing} />
          </span>
          Commissioning and Testing phase of solar power system installation
        </strong>
      ),
      info: (
        <div>
          <p>
            The commissioning and testing phase of a solar power system
            installation is the final step in the process before the system is
            put into operation. During this phase, the system is thoroughly
            tested to ensure that it is operating correctly and that it meets
            all necessary regulations and requirements.
          </p>
          <p className={styles.margin}>
            The commissioning process begins with a visual inspection of the
            entire system to ensure that it is installed correctly and that all
            components are working properly. This includes checking the
            electrical connections, the power output of the solar panels, and
            the overall function of the system.
          </p>
          <p className={styles.margin}>
            Next, the system is tested under different operating conditions to
            ensure that it is producing energy as expected and that it is
            properly integrated into the existing electrical grid. This includes
            testing the system during different times of the day, under
            different weather conditions, and at different levels of sunlight.
            The output of the system is also measured and compared to the
            expected output to ensure that it is operating within the expected
            parameters.
          </p>
          <p className={styles.margin}>
            The commissioning process also includes testing the safety features
            of the system, including the grounding and over-current protection,
            to ensure that the system is safe to operate. The system is also
            tested for compliance with local, state, and national electrical
            codes, and for compliance with any warranties and guarantees
            provided by the manufacturer.
          </p>
          <p className={styles.margin}>
            Finally, the system is handed over to the owner or operator, and an
            operation and maintenance manual is provided. This manual includes
            information on how to operate and maintain the system, as well as
            troubleshooting guidelines and contact information for the
            manufacturer or installer.
          </p>
          <p className={styles.margin}>
            Overall, the commissioning and testing phase of a solar power system
            installation is a critical step in the process to ensure that the
            system is installed correctly, is producing energy as expected, is
            properly integrated into the existing electrical grid and is safe to
            operate. This phase requires experienced professionals and a
            thorough testing process to ensure that the system meets all
            necessary regulations and requirements and is ready for operation.
          </p>
        </div>
      ),
    },
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={maintenance} />
          </span>
          Operations and Maintenance phase of solar power system installation
        </strong>
      ),
      info: (
        <div>
          <p>
            The operations and maintenance phase of a solar power system
            installation is the ongoing process of monitoring, maintaining, and
            repairing the system to ensure that it continues to operate at
            optimal performance. This phase is crucial for ensuring that the
            system continues to generate power as expected and that it has a
            long lifespan.
          </p>
          <p className={styles.margin}>
            The first step in the operations and maintenance phase is monitoring
            the system. This includes regularly checking the power output of the
            system, monitoring the performance of the individual components, and
            monitoring for any unusual behavior or issues. This monitoring can
            be done manually or through the use of remote monitoring systems
            that allow for real-time monitoring of the system from a remote
            location.
          </p>
          <p className={styles.margin}>
            Next, regular maintenance is performed on the system to ensure that
            it continues to operate at optimal performance. This includes
            cleaning the solar panels, checking the electrical connections, and
            replacing any components that have reached the end of their
            lifespan. Preventive maintenance also includes monitoring and
            periodically replacing the battery if the system is off-grid or if
            it is used to store energy.
          </p>
          <p className={styles.margin}>
            When issues or problems are identified, repairs are made as quickly
            as possible to minimize downtime and ensure that the system
            continues to operate at optimal performance. This may include
            replacing components, making electrical repairs, or making
            structural repairs to the system.
          </p>
          <p className={styles.margin}>
            It's important to have a planned maintenance schedule in place to
            ensure that regular maintenance tasks are carried out in a timely
            manner and that any issues are addressed before they become major
            problems. This can help to extend the lifespan of the system and
            minimize the need for costly repairs.
          </p>
          <p className={styles.margin}>
            Overall, the operations and maintenance phase of a solar power
            system installation is a critical step in ensuring that the system
            continues to operate at optimal performance and has a long lifespan.
            This phase requires ongoing monitoring, regular maintenance, and
            prompt repairs to ensure that the system is producing power as
            expected and that it is safe to operate.
          </p>
        </div>
      ),
    },
    {
      title: (
        <strong className={styles.strong}>
          <span className={styles.icon}>
            <Image src={decommissioning} />
          </span>
          Decommissioning of solar power system
        </strong>
      ),
      info: (
        <div>
          <p>
            Decommissioning of a solar power system refers to the process of
            safely dismantling and disposing of the system at the end of its
            useful life. This process is essential to ensure that the system is
            safely removed and that the site is left in a condition that is safe
            for future use.
          </p>
          <p className={styles.margin}>
            The first step in the decommissioning process is to safely
            disconnect the system from the electrical grid. This includes
            shutting down the system, disconnecting it from any energy storage
            systems, and disconnecting it from the electrical grid. This step is
            important to ensure that the system is safely disconnected and that
            it poses no danger to workers or the public.
          </p>
          <p className={styles.margin}>
            Next, the system is dismantled, including the removal of the solar
            panels, inverters, and other electrical components. This is
            typically done using specialized equipment such as cranes and
            forklifts. The dismantled components are then transported off-site
            for proper disposal or recycling.
          </p>
          <p className={styles.margin}>
            The final step in the decommissioning process is the restoration of
            the site. This includes removing any remaining structures, such as
            mounting systems and foundation, and restoring the site to its
            original condition. This may include grading, seeding, and planting
            to ensure that the site is safe for future use.
          </p>
          <p className={styles.margin}>
            It's worth noting that decommissioning plan should be in place
            before installation, as it is required by many regulations and
            permits. Decommissioning plans often include details such as the
            timeline for decommissioning, the cost of decommissioning, and the
            responsibilities of the different parties involved in the
            decommissioning process.
          </p>
          <p className={styles.margin}>
            Overall, decommissioning of a solar power system is a critical step
            in the process of removing the system at the end of its useful life.
            It involves safely disconnecting the system from the electrical
            grid, dismantling the system, transporting the components off-site
            for proper disposal or recycling, and restoring the site to its
            original condition. This process is essential to ensure that the
            system is safely removed and that the site is left in a condition
            that is safe for future use.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>{title} - Services</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className={`${styles.services}`}>
        <div className={styles.title}>
          <h2>Services Offerred</h2>
        </div>
        {description.map((content, index) => {
          return <Accordian key={index} {...content} />;
        })}
        <CollapseSideBar name="Services" />
        <SideBar items={services} name="Services" />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Services;
