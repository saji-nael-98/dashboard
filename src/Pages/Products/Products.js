import React from "react";
import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import Section from "../../components/UI/Section/Section";

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
    <DashboardPage >
      <Section>
       
      </Section>
    </DashboardPage>
  );
};
export default Products;
