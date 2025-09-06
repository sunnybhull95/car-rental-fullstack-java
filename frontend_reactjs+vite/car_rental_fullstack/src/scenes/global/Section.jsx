const Section = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`w-full lg:pl-22  lg:pr-24 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
