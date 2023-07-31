const SmallContainer = ({ children, extraClasses }) => {
  return <div className={`max-w-6xl mx-auto ${extraClasses}`}>{children}</div>;
};

export default SmallContainer;
