import Content from '@/components/Content/Content';
import Scroll from '@/components/ScrollToTop/ScrollToTop';
import SideBar from '@/components/sidebar/sidebar';
import Head from 'next/head';
import solutions from '@/data/solutions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import { navLinksIndex } from '@/data/navbarData';

const OnGridSolarSystem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.solutions));
  }, []);
  const metaDescription =
    'Generate clean and renewable energy with an on-grid solar power system! Reduce or even eliminate electricity bills, and help fight climate change. Learn more about the cost-effective and reliable benefits of on-grid solar power systems.';

  const keywords =
    'On-grid solar power system, Solar panels, Inverter, Bi-directional meter, Utility power grid, AC electricity, DC electricity, Excess energy, Electricity bills, Grid-tie inverters, Renewable energy, Carbon footprint, Fossil fuel-based power systems, Clean energy, Climate change, Cost-effective, Reliability, Environmentally friendly, Off-grid systems, Energy savings.';

  const content = (
    <div>
      <p className="margin">
        An on-grid solar power system is a type of solar energy system that is
        connected to the utility power grid. This means that the system is able
        to feed excess energy back into the grid, and draw from the grid when
        the solar panels are not producing enough power.
      </p>
      <p className="margin">
        The main components of an on-grid solar power system include solar
        panels, an inverter, and a bi-directional meter. The solar panels
        convert sunlight into DC electricity, which is then sent to the
        inverter. The inverter converts the DC electricity into AC electricity,
        which is the type of electricity used in most homes and buildings. The
        bi-directional meter measures the amount of electricity that is being
        fed into the grid and the amount that is being taken from the grid.
      </p>
      <p className="margin">
        On-grid solar power systems are becoming increasingly popular due to
        their ability to reduce or even eliminate electricity bills. By
        generating their own electricity, homeowners and businesses can save
        money on their utility bills, and in some cases even earn money by
        feeding excess electricity back into the grid.
      </p>
      <p className="margin">
        On-grid solar power systems are also more reliable than off-grid
        systems, which are not connected to the power grid. This is because if
        the solar panels are not producing enough power, the system can draw
        from the grid to ensure a steady supply of electricity.
      </p>
      <p className="margin">
        Additionally, on-grid solar power systems are more efficient than
        off-grid systems because they can take advantage of grid-tie inverters,
        which are able to match the phase and frequency of the utility power.
      </p>
      <p className="margin">
        On-grid solar power systems are also more cost-effective than off-grid
        systems because they do not require batteries to store excess
        electricity. Batteries can be expensive and require maintenance, so
        eliminating them can save money in the long run.
      </p>
      <p className="margin">
        Finally, on-grid solar power systems are more environmentally friendly
        than traditional fossil fuel-based power systems. Solar power is a clean
        and renewable energy source, and by using it, homeowners and businesses
        can reduce their carbon footprint and help to combat climate change.
      </p>
      <p className="margin">
        In Conclusion, On-grid solar power systems are a cost-effective,
        reliable and environmentally friendly way to generate electricity. They
        allow homeowners and businesses to reduce or eliminate their electricity
        bills, and reduce their carbon footprint. They are becoming increasingly
        popular as the cost of solar panels and other equipment continues to
        decrease.
      </p>
    </div>
  );
  return (
    <>
      <Head>
        <title>ON GRID SOLAR POWER SYSTEM INSTALLATION</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Content
          title="On Grid Solar System"
          description={content}
          items={solutions}
          name="Solutions"
        />
        <SideBar items={solutions} name="Solutions" />

        <Scroll />
      </main>
    </>
  );
};
export default OnGridSolarSystem;
