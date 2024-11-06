import "./App.css";
import Table from "./components/Table";
import { Data } from "./DataStore/data";

function App(): JSX.Element {
  return (
    <div>
      <Table data={Data} />
    </div>
  );
}

export default App;
