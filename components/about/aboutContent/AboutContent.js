import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'next/link';
import styles from './AboutContent.module.css';
import Image from 'next/image';
import experienceImg from '@/public/svg/intro/experience.svg';
import speedImg from '@/public/svg/intro/speed.svg';
import workmanshipImg from '@/public/svg/intro/workmanship.svg';
import customizableImg from '@/public/svg/intro/customizable.svg';
import managementImg from '@/public/svg/intro/management.svg';
import CardList from '@/components/CardList';

const AboutContent = () => {
  const item = [
    {
      title: 'Experience and expertise',
      icon: experienceImg,
      info: 'Mgetenergy has extensive experience( its 10 year +) and expertise in the solar EPC industry.',
    },
    {
      title: 'Efficiency and speed',
      icon: speedImg,
      info: 'Mgetenergy has proven track record of delivering projects on time and within budget.',
    },
    {
      title: 'Quality workmanship',
      icon: workmanshipImg,
      info: 'Mgetenrgy is known for delivering high-quality workmanship and utilizing industry-best practices.',
    },
    {
      title: 'Customizable solutions',
      icon: customizableImg,
      info: 'Mgetenrgy offers custom solutions for customers based on their specific needs and requirements.',
    },
    {
      title: 'Strong project management',
      icon: managementImg,
      info: 'Mgetenergy has a strong project   management team that can effectively oversee and manage solar projects from start to finish.',
    },
  ];
  return (
    <div className="container">
      <div className={styles.content__description}>
        <p className={styles.margin}>
          The unique offering that sets Mgetenergy apart from our competitors,
          is:
        </p>
        <CardList content={item} />
        <p className={styles.margin}>
          The team at Mgetenergy is made up of experts in solar power and IOT.
          From requirement gathering, designing to maintenance, our team brings
          a wealth of knowledge and experience to the table. We are constantly
          pushing the boundaries of what is possible and are dedicated to
          delivering the best service to our customers.
        </p>
        <p className={styles.margin}>
          If you are interested in learning more about Mgetenergy or if you have
          any questions, please don't hesitate to contact us. Our customer
          service team is available to assist you at WA# 98186 66325,or
          email-id: wecare@metenergy.com
        </p>
        <p className={styles.margin}>
          Thank you for considering Mgetenergy as your go-to for solar power
          solution. We look forward to working with you!
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Bhupendra Singh </td>
            <td>- Founder - CTO</td>
          </tr>
          <tr>
            <td>Krishna Singh </td>
            <td>- Founder - Director</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.margin}>
        Mission: Our mission is to provide reliable, sustainable, and
        cost-effective solar power solutions to homes and businesses, while
        reducing dependence on fossil fuels and promoting a greener future.
      </p>
      <p className={styles.margin}>
        Vision :Our vision is to become a leading provider of clean energy, and
        empower communities through the widespread adoption of solar power
        systems, to achieve a sustainable future for all
      </p>
    </div>
  );
};
export default AboutContent;
