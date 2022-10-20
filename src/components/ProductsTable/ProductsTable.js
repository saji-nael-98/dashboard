import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FILTERED_PRODUCTS } from "../../Constents/SelectorsConstent";
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
const ProductsTable = () => {
  const products = useSelector(FILTERED_PRODUCTS);
  return <Table columns={columns} dataSource={products} />;
};
export default ProductsTable;
