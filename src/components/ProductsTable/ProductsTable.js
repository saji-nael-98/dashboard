import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <Link to={`/products/${text}`}>{text}</Link>,
  },
  {
    title: "الاسم",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "الصنف",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "السعر",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "الكمية",
    dataIndex: "inStack",
    key: "inStack",
    sorter: (a, b) => a.inStock - b.inStock,
  },
  {
    title: "على العرض",
    dataIndex: "onSale",
    key: "onSale",
  },
  {
    title: "الحالة",
    dataIndex: "status",
    key: "status",
  },
];
const ProductsTable = (props) => {
  return <Table columns={columns} dataSource={props.data || []} />;
};
export default ProductsTable;
