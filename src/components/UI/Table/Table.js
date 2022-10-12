import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CButton from "../Button/Button";

const TableContainer = styled.div`
  margin: 0.5rem 0;
`;
const CTable = (props) => {  
  return (
    <TableContainer>
      <Table
        pagination={{ pageSize: props.size || 5 }}
        columns={props.columns}
        dataSource={props.data}
      />
    </TableContainer>
  );
};
export default React.memo(CTable);
