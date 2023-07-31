const NavItem = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      className="group text-sm transition duration-300 flex items-center lg:p-0 p-4"
    >
      <span className="lg:hidden">{icon}</span>
      {label}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-danger"></span>
    </a>
  );
};

export default NavItem;
