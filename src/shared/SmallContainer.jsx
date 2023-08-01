const SmallContainer = ({ children, extraClasses }) => {
  return <div className={`max-w-7xl mx-auto ${extraClasses}`}>{children}</div>;
};

export default SmallContainer;
