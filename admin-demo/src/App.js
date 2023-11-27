import { Admin, EditGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

import "./App.css";
import UserList, { UserEdit } from "./components/User";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
