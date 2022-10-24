import { useState } from "react";
import "./Folder.css"
const Folder = ({ name, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpanded  = (event) => {
    event.stopPropagation();
    setIsExpanded((prevState)=> !prevState);
  }
  return (
    <div className="folder-header" onClick={toggleExpanded}>
      <div className="folder-header-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="icon--svg"
        >
          <path d="M0 480H512V96H272L208 32H0V480z" />
        </svg>
        <span className="folder-name">{name}</span>
      </div>
      <div className={`folder--children ${!isExpanded ? 'display-none':''}`}>{children}</div>
    </div>
  );
};

export default Folder;
