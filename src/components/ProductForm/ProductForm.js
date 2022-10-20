import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import PropTypes from "prop-types";
import { memo } from "react";
import CButton from "../UI/Button/Button";
import {
  PRODUCT_CATEGORY,
  PRODUCT_STATUS,
} from "../../Constents/ProductConstent";
const lg = {
  span: 12,
};
const xs = {
  span: 24,
};
function getFields(product) {
  return [
    {
      name: ["name"],
      value: product.name,
    },
    {
      name: "category",
      value: product.category,
    },
    {
      name: "status",
      value: product.status,
    },
    {
      name: "inStock",
      value: product.inStack,
    },
    {
      name: "price",
      value: product.price,
    },
    {
      name: "description",
      value: product.description,
    },
  ];
}
const ProductForm = (props) => {
  return (
    <Form
      layout="vertical"
      fields={getFields({ ...props.product })}
      onFinish={props.onFinish}
    >
      <Row gutter={[16, 16]}>
        <Col lg={lg} xs={xs}>
          <Form.Item
            label="أسم"
            name="name"
            rules={[
              {
                required: true,
                message: "أدخل الاسم!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col lg={lg} xs={xs}>
          <Form.Item
            label="الصنف"
            name={"category"}
            rules={[
              {
                required: true,
                message: "أدخل الصنف!",
              },
            ]}
          >
            <Select>
              {PRODUCT_CATEGORY.map((item, index) => (
                <Select.Option value={item} key={index}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={lg} xs={xs}>
          <Form.Item
            label="الحالة"
            name={"status"}
            rules={[
              {
                required: true,
                message: "أختار الحالة!",
              },
            ]}
          >
            <Select>
              {PRODUCT_STATUS.map((item, index) => (
                <Select.Option value={item} key={index}>
                  {item.replace("_", " ")}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={lg} xs={xs}>
          <Form.Item
            label={"الكمية"}
            name="inStock"
            rules={[
              {
                required: true,
                message: "أدخل الكمية!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={lg} xs={xs}>
          <Form.Item
            label={"السعر"}
            name="price"
            rules={[
              {
                required: true,
                message: "أدخل السعر!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={lg} xs={xs}>
          <Form.Item
            label={"وصف المنتج"}
            name="description"
            rules={[
              {
                required: true,
                message: "أدخل الوصف!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col lg={lg} xs={xs}>
          <Form.Item>
            <CButton type="submit">حفظ</CButton>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
ProductForm.prototype = {
  onFinish: PropTypes.func,
  product: {
    name: "",
    category: 0,
    status: 0,
    inStack: 20,
    price: 0,
    description: "",
  },
};
ProductForm.defaultProps = {
  product: {
    name: "",
    category: PRODUCT_CATEGORY[0],
    status: PRODUCT_STATUS[0],
    inStack: 20,
    price: 0,
    description: "",
  },
};
export default memo(ProductForm);
