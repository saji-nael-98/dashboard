import Input from "antd/lib/input/Input";
import React from "react";
import { Button } from "../../components/UI/Button/Button";
import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import { FormInput } from "../../components/UI/FormInput/FormInput";
import Section from "../../components/UI/Section/Section";
import CustomTable from "../../components/UI/Table/Table";
import styles from "./Products.module.css";
const Products = () => {
  const columns = [
    {
      title: "الاسم",
      dataIndex: "الاسم",
      key: "الاسم",
    },
    {
      title: "الصنف",
      dataIndex: "الصنف",
      key: "الصنف",
    },
    {
      title: "الكمية",
      dataIndex: "الكمية",
      key: "الكمية",
    },
    {
      title: "الحالة",
      dataIndex: "الحالة",
      key: "الحالة",
    },
  ];
  return (
    <DashboardPage title="البضاعة">
      <Section>
        <div className={styles["filter"]}>
          <div>
            <Input placeholder="البحث عن منتج..."/>
          </div>
          <div>
            <Button>اضافة جديد</Button>
          </div>
        </div>
        <CustomTable columns={columns} dataSource={null} />
      </Section>
    </DashboardPage>
  );
};
export default Products;
