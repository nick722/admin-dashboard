import React from "react";
import {
  Datagrid,
  DeleteButton,
  EmailField,
  List,
  TextField,
} from "react-admin";

const UserList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="company" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
