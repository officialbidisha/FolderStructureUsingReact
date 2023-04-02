import CSS from "./../assets/CSS.png";
import HTML from "./../assets/HTML.png";
import JavaScript from "./../assets/JavaScript.png";

import "./file.css";

const File = (props) => {
  const { name } = props;
  const getFileType = (name) => {
    let extension = name.split(".")[1];
    switch (extension) {
      case "css":
        return CSS;
      case "html":
        return HTML;
      case "js":
        return JavaScript;
    }
  };

  return (
    <div className="file--header">
      <span><img src={getFileType(name)} className='file--icon'></img></span>
      <span className="file--name">{name}</span>
    </div>
  );
};

export default File;