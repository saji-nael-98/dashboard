import { Button, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import Section from "../../components/UI/Section/Section";
import CTable from "../../components/UI/Table/Table";
import useHttp from "../../hooks/use-http";

const Products = () => {
  const [data, setData] = useState([]);
  const { isLoading, error, sendRequest: sendRequest } = useHttp();
  const authHeader = useAuthHeader();
  useEffect(() => {
    sendRequest(
      {
        url: "/api/product/readAll",
        headers: {
          Authorization: authHeader(),
          
        },
      },
      setData
    );
  }, [sendRequest]);

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
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button>تعديل</Button>
          <Button type="primary" danger
          onClick={()=>{
            
          }}
          >
            حذف
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <DashboardPage>
      <Section>
        <CTable title={"البضاعة"} columns={columns} data={data} />
      </Section>
    </DashboardPage>
  );
};
export default Products;
