const Container = ({ children, extraClasses }) => {
  return (
    <div className={`max-w-[1903px] mx-auto ${extraClasses}`}>{children}</div>
  );
};

export default Container;
