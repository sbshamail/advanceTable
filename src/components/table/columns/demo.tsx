'use client';
import { TableTabsType } from 'nextmastery/props';
import { ColumnType } from '../tableInterface';

export const demoData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  {
    id: 3,
    name: 'Michael Johnson',
    age: 32,
    email: 'michael.johnson@example.com',
  },
  { id: 4, name: 'Emily Davis', age: 28, email: 'emily.davis@example.com' },
  { id: 5, name: 'Sarah Wilson', age: 35, email: 'sarah.wilson@example.com' },
  { id: 6, name: 'David Brown', age: 40, email: 'david.brown@example.com' },
  { id: 7, name: 'Chris Miller', age: 29, email: 'chris.miller@example.com' },
  { id: 8, name: 'Daniel Lee', age: 24, email: 'daniel.lee@example.com' },
  { id: 9, name: 'Anna White', age: 33, email: 'anna.white@example.com' },
  {
    id: 10,
    name: 'Sophia Taylor',
    age: 27,
    email: 'sophia.taylor@example.com',
  },
  {
    id: 11,
    name: 'James Anderson',
    age: 38,
    email: 'james.anderson@example.com',
  },
  {
    id: 12,
    name: 'Olivia Thomas',
    age: 26,
    email: 'olivia.thomas@example.com',
  },
  {
    id: 13,
    name: 'Isabella Harris',
    age: 31,
    email: 'isabella.harris@example.com',
  },
  { id: 14, name: 'Mason Clark', age: 28, email: 'mason.clark@example.com' },
  {
    id: 15,
    name: 'Liam Rodriguez',
    age: 36,
    email: 'liam.rodriguez@example.com',
  },
  { id: 16, name: 'Zoe Lewis', age: 27, email: 'zoe.lewis@example.com' },
  { id: 17, name: 'Ethan Walker', age: 34, email: 'ethan.walker@example.com' },
  { id: 18, name: 'Madison Hall', age: 25, email: 'madison.hall@example.com' },
  { id: 19, name: 'Lucas Young', age: 32, email: 'lucas.young@example.com' },
  { id: 20, name: 'Chloe Allen', age: 30, email: 'chloe.allen@example.com' },
  {
    id: 21,
    name: 'Jackson Scott',
    age: 23,
    email: 'jackson.scott@example.com',
  },
  { id: 22, name: 'Amelia King', age: 29, email: 'amelia.king@example.com' },
  { id: 23, name: 'Aiden Wright', age: 31, email: 'aiden.wright@example.com' },
  { id: 24, name: 'Ella Green', age: 33, email: 'ella.green@example.com' },
  { id: 25, name: 'Logan Adams', age: 27, email: 'logan.adams@example.com' },
  {
    id: 26,
    name: 'Charlotte Baker',
    age: 29,
    email: 'charlotte.baker@example.com',
  },
  {
    id: 27,
    name: 'Gabriel Nelson',
    age: 35,
    email: 'gabriel.nelson@example.com',
  },
  { id: 28, name: 'Lily Carter', age: 32, email: 'lily.carter@example.com' },
  { id: 29, name: 'Mia Perez', age: 26, email: 'mia.perez@example.com' },
  {
    id: 30,
    name: 'Benjamin Evans',
    age: 34,
    email: 'benjamin.evans@example.com',
  },
  {
    id: 31,
    name: 'Grace Gonzalez',
    age: 30,
    email: 'grace.gonzalez@example.com',
  },
  { id: 32, name: 'Henry Walker', age: 28, email: 'henry.walker@example.com' },
  {
    id: 33,
    name: 'Abigail Moore',
    age: 25,
    email: 'abigail.moore@example.com',
  },
  {
    id: 34,
    name: 'William Harris',
    age: 27,
    email: 'william.harris@example.com',
  },
  { id: 35, name: 'Ella Clark', age: 26, email: 'ella.clark@example.com' },
  {
    id: 36,
    name: 'Samuel Turner',
    age: 31,
    email: 'samuel.turner@example.com',
  },
  {
    id: 37,
    name: 'Oliver Mitchell',
    age: 33,
    email: 'oliver.mitchell@example.com',
  },
  {
    id: 38,
    name: 'Amelia Wright',
    age: 30,
    email: 'amelia.wright@example.com',
  },
  { id: 39, name: 'Jacob Young', age: 29, email: 'jacob.young@example.com' },
  { id: 40, name: 'Sophie Lee', age: 24, email: 'sophie.lee@example.com' },
];

export const demoData2 = [
  { id: 1, name: 'John Doe 2', age: 30, email: 'john.doe@example2.com' },
  { id: 2, name: 'Jane Smith 2', age: 25, email: 'jane.smith@example2.com' },
  {
    id: 3,
    name: 'Michael Johnson 2',
    age: 32,
    email: 'michael.johnson@example.com2',
  },
  { id: 4, name: 'Emily Davis 2', age: 28, email: 'emily.davis@example.com2' },
  {
    id: 5,
    name: 'Sarah Wilson 2',
    age: 35,
    email: 'sarah.wilson@example.com2',
  },
  { id: 6, name: 'David Brown 2', age: 40, email: 'david.brown@example.com2' },
  {
    id: 7,
    name: 'Chris Miller 2',
    age: 29,
    email: 'chris.miller@example.com2',
  },
  { id: 8, name: 'Daniel Lee 2', age: 24, email: 'daniel.lee@example.com2' },
  { id: 9, name: 'Anna White 2', age: 33, email: 'anna.white@example.com2' },
  {
    id: 10,
    name: 'Sophia Taylor2',
    age: 27,
    email: 'sophia.taylor@example2.com',
  },
];

export const demoColumns: ColumnType[] = [
  { title: 'ID', accessor: 'id', filterId: 'id' },
  { title: 'Name', accessor: 'name', filterId: 'name' },
  { title: 'Age', accessor: 'age', filterId: 'age' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
];

export const demoColumns2: ColumnType[] = [
  { title: 'ID', accessor: 'id', filterId: 'id' },
  { title: 'Name', accessor: 'name', filterId: 'name' },
  { title: 'Age', accessor: 'age', filterId: 'age' },
  { title: 'Email', accessor: 'email', filterId: 'email' },
];

const ExpandingTable = (props: any) => {
  return <div>{JSON.stringify(props?.row)}</div>;
};
export const tabs: TableTabsType[] = [
  {
    titleTable: 'Demo Table',
    columns: demoColumns,
    data: demoData,
    total: demoData.length,
    expandable: true,
    // multiExpandable: true,
    ExpandingContent: ExpandingTable,
    rowId: 'id',
  },
  {
    titleTable: 'Demo Table 2',
    columns: demoColumns,
    data: demoData2,
    total: demoData.length,
    expandable: true,
    multiExpandable: true,
    ExpandingContent: ExpandingTable,
    rowId: 'id',
  },
];
