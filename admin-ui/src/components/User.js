import React from "react";
import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EmailField,
  List,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const UserCreate = () => {
  return (
    <Create title="Create User">
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Create>
  );
};

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="company" />
    </SimpleForm>
  </Edit>
);
const UserList = () => {
  return (
    <List>
      <Datagrid
        rowClick="edit"
        sx={{
          ".RaDatagrid-rowEven": {
            backgroundColor: "lavender",
          },
          ".RaDatagrid-headerCell": {
            backgroundColor: "MistyRose",
          },
        }}
      >
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
