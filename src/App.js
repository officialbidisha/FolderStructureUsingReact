
import './App.css';
import Tree from './components/Tree';

function App() {
  const structure = [  {
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
            name: "A",
            type: "folder",
            children: [{ name: "AB.js", type: "file" }],
          },
          {
            name: "B",
            type: "folder",
            children: [{ name: "BA.js", type: "file" }],
          },
        ],
      },
    ],
  }]
  return (
    <div className="App">
      <Tree structure={structure}></Tree>
    </div>
  );
}

export default App;
