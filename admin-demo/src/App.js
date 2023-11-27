import { Admin, ListGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

import "./App.css";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
