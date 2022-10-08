import { Alert, Form, Input, InputNumber, Select } from "antd";
import { useAuthHeader } from "react-auth-kit";
import useHttp from "../../../hooks/use-http";
import CButton from "../Button/Button";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 3,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 3,
    },
  },
};

const ProductForm = () => {
  const [form] = Form.useForm();
  const { isLoading, error, sendRequest: sendRequest } = useHttp();
  const authHeader = useAuthHeader();
  const done=(test)=>{

  }
  const onFinish = (values) => {
  
    sendRequest(
      {
        url: "/api/product",
        method:'POST',
        headers: {
          Authorization: authHeader(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:{...values}
      },
      done
    );
  };
  return (
    <>
     {error && <Alert message={error} type="error" />}
      <Form
        layout="horizontal"
        labelWrap
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <h4
          style={{
            margin: "0.8rem 0",
          }}
        >
          المعلومات الاساسية
        </h4>
        <Form.Item
          name="name"
          label="الاسم"
          rules={[
            {
              required: true,
              message: "ادخل الاسم !",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="ادخل الاسم" />
        </Form.Item>
        <Form.Item
          name="category"
          label="الصنف"
          rules={[
            {
              required: true,
              message: "أختر صنف !",
            },
          ]}
        >
          <Select placeholder="اختر صنف">
            <Option value="0">أراجيل</Option>
            <Option value="1">معسل</Option>
            <Option value="2">مستلزمات</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="status"
          label="الحالة"
          rules={[
            {
              required: true,
              message: "أختر الحالة !",
            },
          ]}
        >
          <Select placeholder="اختر حالة">
            <Option value="0">مرئي</Option>
            <Option value="1">غير مرئي</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          label="وصف"
          rules={[
            {
              required: true,
              message: "أدخل الوصف",
            },
          ]}
        >
          <Input.TextArea maxLength={100} />
        </Form.Item>
        <Form.Item
          name="inStock"
          label="الكمية"
          rules={[
            {
              required: true,
              message: "أدخل الوصف",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="price"
          label="السعر"
          rules={[
            {
              required: true,
              message: "أدخل السعر !",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <CButton loading={isLoading} type="submit">حفظ</CButton>
        </Form.Item>
      </Form>
    </>
  );
};
export default ProductForm;
