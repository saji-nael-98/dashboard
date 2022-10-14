import { memo } from "react";
import { Button, Card, Select, Space } from "antd";
import Search from "antd/lib/input/Search";
import Section from "../../components/UI/Section/Section";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ProductsFilter = (props) => {
  const navigate = useNavigate();
  const onSearchHandler = (value) => {
    const data = props.products.filter((item) => item.name.includes(value));
    props.setProducts(data);
  };
  const onClickSelectHandler = (value) => {
    if (value === undefined) {
      props.setProducts(props.products);
    } else {
      const data = props.products.filter((item) => item.category == value);
      props.setProducts(data);
    }
  };
  return (
    <Section>
      <Card>
        <Space wrap>
          <Select
            allowClear
            onChange={onClickSelectHandler}
            placeholder="اختر صنف"
            style={{
              width: "14rem",
            }}
          >
            <Select.Option value="أراجيل">أراجيل</Select.Option>
            <Select.Option value="معسل">معسل</Select.Option>
            <Select.Option value="مستلزمات">مستلزمات</Select.Option>
          </Select>
          <Search
            placeholder="ابحث عن المنتج"
            allowClear
            onSearch={onSearchHandler}
            style={{
              width: "14rem",
            }}
          />
        </Space>
        <Button
          onClick={() => {
            navigate("/products/new");
          }}
          style={{
            float: "left",
            position: "relative",
          }}
          icon={
            <AiOutlinePlusCircle
              style={{
                position: "relative",
                top: 2.5,
                left: 2.5,
              }}
            />
          }
        >
          اضافة جديد
        </Button>
      </Card>
    </Section>
  );
};
export default memo(ProductsFilter);
