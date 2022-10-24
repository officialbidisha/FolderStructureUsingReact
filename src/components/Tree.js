import File from "./File";
import Folder from "./Folder";
import "./Tree.css";
const Tree = ({ structure }) => {
  return structure.map((datum) => {
    if (datum.type.toLowerCase() === "file") {
      return <File name={datum.name} key={datum.name}></File>;
    } else {
      return (
        <Folder name={datum.name} key={datum.name}>
          <Tree structure={datum.children}></Tree>
        </Folder>
      );
    }
  });
};

export default Tree;
