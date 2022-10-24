import File from "./File";
import Folder from "./Folder";

const Tree = ({ structure }) => {
  return structure.map((datum) => {
    if (datum.type.toLowerCase() === "file") {
      return <File name={datum.name}></File>;
    } else {
      return (
        <Folder name={datum.name}>
          <Tree structure={datum.children}></Tree>
        </Folder>
      );
    }
  });
};

export default Tree;
