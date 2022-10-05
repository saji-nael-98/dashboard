import { Button, Space } from "antd";
import React from "react";
import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import Section from "../../components/UI/Section/Section";
import CTable from "../../components/UI/Table/Table";

const Products = () => {
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
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "الحالة",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button>تعديل</Button>
          <Button type="primary" danger>
            حذف
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <DashboardPage>
      <Section>
        <CTable title={"البضاعة"} columns={columns}  />
      </Section>
    </DashboardPage>
  );
};
export default Products;
