import { Table } from "antd";
import React from "react";
import styled from "styled-components";
import CButton from "../Button/Button";

const TableContainer = styled.div`
  & .table-container__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0;
  }
`;
const CTable = (props) => {
  return (
    <TableContainer>
      <section className="table-container__filter">
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <CButton onClick={() => {}}>اضافة جديد</CButton>
        </div>
      </section>
      <Table
        pagination={{ pageSize: props.size || 5 }}
        columns={props.columns}
        dataSource={props.data}
      />
    </TableContainer>
  );
};
export default CTable;
