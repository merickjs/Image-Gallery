const Card = (props) => {
  const { className } = props;
  return <div className={`bg-white  ${className}`}>{props.children}</div>;
};

export default Card;
