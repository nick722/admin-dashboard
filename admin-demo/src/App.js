import { Admin, EditGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

import "./App.css";
import UserList from "./components/UserList";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;
