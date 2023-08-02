import { Link } from "react-router-dom";
import TextRed from "../TextRed";

const ShowLinks = ({ currentLength, fullLength, links, setCurrentLength }) => {
  return (
    <div className="flex flex-col gap-1">
      {links.slice(0, currentLength).map((link, index) => (
        <Link className="hover:text-danger" key={index} to={link.path}>
          {link.label}
        </Link>
      ))}
      {currentLength !== fullLength && (
        <TextRed onClick={() => setCurrentLength(fullLength)}>
          View More
        </TextRed>
      )}
    </div>
  );
};

export default ShowLinks;
