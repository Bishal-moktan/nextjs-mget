import { FaCheckCircle } from 'react-icons/fa';

const Lists = ({ content, title, subtitle }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{subtitle ? subtitle : ''}</p>
      <ul className="">
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
