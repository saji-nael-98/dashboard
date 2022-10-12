import Search from "antd/lib/input/Search";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CButton from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import Section from "../../components/UI/Section/Section";
import CTable from "../../components/UI/Table/Table";
import useHttp from "../../hooks/use-http";
import { productAction } from "../../store/product-slice";
import styles from "./Products.module.css";
const columns = [
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
    title: "الكمية",
    dataIndex: "inStack",
    key: "inStack",
  },
  {
    title: "الحالة",
    dataIndex: "status",
    key: "inStack",
  },
];
const links = [
  {
    label: "لوحة التحكم",
    link: "/",
  },
  {
    label: "البضاعة",
    link: "/products",
  },
];

const Products = () => {
  const navigate=useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [data, setData] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  useEffect(() => {
    const onDone = (response) => {
      const arr = [];
      for (let x = 0; x < response.length; x++) {
        arr.push(response[x]);
      }
      setData(arr);
      dispatch(productAction.setProducts(response));
    };
    sendRequest(
      {
        url: "/api/product/readAll",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
      onDone
    );
  }, [sendRequest]);
  const onSearch = useCallback(
    (value) => {
      const arr = products.filter((item) => item.name.includes(value));
      setData(arr);
    },
    [products]
  );
  return (
    <DashboardPage title="البضاعة" links={links}>
      <Section>
        <Card>
          <section className={styles["product-table__filter"]}>
            <div>
              <Search
                placeholder="ادخل المنتج الذي تبحث عنه"
                onSearch={onSearch}
              />
            </div>
            <div>
              <CButton onClick={
                ()=>{
                  navigate('/products/new')
                }
              }>اضافة جديد</CButton>
            </div>
          </section>
          <section>
            <CTable columns={columns} name={"test"} data={data} />
          </section>
        </Card>
      </Section>
    </DashboardPage>
  );
};
export default Products;
