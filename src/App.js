import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/headers/headers";
import Pagedegarde from "./components/mainpage/pagedegarde";
import GroupExample from "./components/programme/programme";

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Pagedegarde></Pagedegarde>
      <GroupExample></GroupExample>
    </div>
  );
}

export default App;
