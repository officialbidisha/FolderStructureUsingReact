import File from "./file";
import Folder from "./folder";

const Tree = (props) => {
  const { structure } = props;
  return (
    <div className="tree-wrapper">
      {structure.map((str) => {
        if (str.type.toLowerCase() === "file") {
          return <File name={str.name} key={str.name}></File>;
        } else {
          return (
            <Folder name={str.name} key={str.name}>
              <Tree structure={str.children}></Tree>
            </Folder>
          );
        }
      })}
    </div>
  );
};
export default Tree;
