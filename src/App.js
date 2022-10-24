import logo from "./logo.svg";
import "./App.css";
import File from "./components/File";
import Folder from "./components/Folder";
import Tree from "./components/Tree";

function App() {
  const structure = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "File.css", type: "file" },
            { name: "File.js", type: "file" },
            { name: "Folder.css", type: "file" },
            { name: "Folder.js", type: "file" },
            { name: "Tree.css", type: "file" },
            { name: "Tree.js", type: "file" },
          ],
        },
        {
          name: "sdk",
          type: "folder",
          children: [
            {
              name: "A.js",
              type: "folder",
              children: [{ name: "AB.js", type: "file" }],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="tree-wrapper">
          <Tree structure={structure}></Tree>
        </div>
      </header>
    </div>
  );
}

export default App;
