import { Button, Table, Tooltip } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FILTERED_PRODUCTS } from "../../Constents/SelectorsConstent";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteProduct } from "../../store/action/product-action";
import { red } from "../../assests/color/color";

const ProductsTable = () => {
  const dispatch = useDispatch();
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
    // {
    //   title: "على العرض",
    //   dataIndex: "onSale",
    //   key: "onSale",
    //   render: (_, record) => {
    //     return <span>{record.onSale ? "نعم" : "لا"}</span>;
    //   },
    // },
    {
      title: "الحالة",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      dataIndex: "delete",
      key: "delete",
      render: (_, record) => {
        return (
          <Tooltip title="حذف" color={red}>
            <Button
              onClick={() => {
                dispatch(deleteProduct(record.id));
              }}
              shape="circle"
              icon={<AiOutlineDelete />}
            />
          </Tooltip>
        );
      },
    },
  ];
  const products = useSelector(FILTERED_PRODUCTS);
  return <Table columns={columns} dataSource={products} />;
};
export default ProductsTable;
