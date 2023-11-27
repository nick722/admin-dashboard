import { Admin, EditGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

import "./App.css";
import UserList, { UserCreate, UserEdit } from "./components/User";
import { authProvider } from "./authProvider";
import { PostCreate, PostEdit, PostList } from "./components/Post";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
    </Admin>
  );
}

export default App;
