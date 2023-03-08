import { FaCheckCircle } from 'react-icons/fa';

const Lists = ({ content, title }) => {
  return (
    <article className="container">
      <p>{title}</p>
      <ul className="lists">
        {content.map((item, index) => {
          return (
            <li className="list" key={index}>
              <FaCheckCircle />
              <strong>{item.title}</strong>
              <span className="margin">{item.info}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
export default Lists;
