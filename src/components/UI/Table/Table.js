import { Space, Table, Tag } from 'antd';
import React from "react";
import Card from "../Card/Card";
import styles from "./Table.module.css";
import 'antd/dist/antd.css';
const CustomTable = (props) => {
  return (
    <Card>
      <Table columns={props.columns} dataSource={props.data}/>
    </Card>
  );
};
export default CustomTable;
