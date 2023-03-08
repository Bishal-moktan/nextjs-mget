const Paragraph = ({ para }) => {
  return (
    <article className="container">
      {para.map((item, index) => {
        return (
          <p className="margin" key={index}>
            {item}
          </p>
        );
      })}
    </article>
  );
};
export default Paragraph;
