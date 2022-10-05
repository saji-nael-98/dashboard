import { Table } from "antd";
import React from "react";
const CTable = (props) => {
  return (
    <div>
      <section>
        <div>
          <h4>{props.title}</h4>
        </div>
        <div></div>
      </section>
      <Table
        pagination={{ pageSize: props.size || 5 }}
        columns={props.columns}
        dataSource={props.data}
      />
    </div>
  );
};
export default CTable;
