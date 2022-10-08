import { Alert,  Form, Input, InputNumber, Select } from "antd";
import { useAuthHeader } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import CButton from "../Button/Button";
import styles from "./ProductForm.module.css";
const { Option } = Select;

const ProductForm = () => {
  const [form] = Form.useForm();
  const { isLoading, error, sendRequest } = useHttp();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();
  const onDone = (response) => {
    navigate(-1);
  };
  const onSubmit = (values) => {
    sendRequest(
      {
        url: "/api/product",
        method: "POST",
        headers: {
          Authorization: authHeader(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: { ...values },
      },
      onDone
    );
  };
  return (
    <>
      {error && <Alert message={error} type="error" />}
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        scrollToFirstError
        labelAlign="right"
        id={styles["product-form"]}
      >
        <div className={styles["form-header"]}>
          <h3>المعلومات الاساسية</h3>
          <CButton loading={isLoading} type="submit">
            حفظ
          </CButton>
        </div>
        <Form.Item
          className={styles["form-controller"]}
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
          className={styles["form-controller"]}
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
          className={styles["form-controller"]}
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
          className={styles["form-controller"]}
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
          className={styles["form-controller"]}
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
          className={styles["form-controller"]}
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
      </Form>
    </>
  );
};
export default ProductForm;
