import logo from "./logo.svg";
import { Admin } from "react-admin";
import restProvider from "ra-data-simple-rest";

import "./App.css";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return <Admin dataProvider={dataProvider} />;
}

export default App;
