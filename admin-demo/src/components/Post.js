import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  List,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const PostList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <TextField source="userId" label="Author" />
      </Datagrid>
    </List>
  );
};

export const PostCreate = () => {
  return (
    <Create title="Create a Post">
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};
