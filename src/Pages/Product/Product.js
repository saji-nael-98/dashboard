import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editProduct, getProduct } from "../../store/action/product-action";
import { PRODUCT_SELECTOR } from "../../Constents/SelectorsConstent";
import { Card, message } from "antd";
import Page from "../../components/UI/Page/Page";
import Section from "../../components/UI/Section/Section";
import ProductForm from "../../components/ProductForm/ProductForm";
import PageHeader from "../../components/UI/Page/PageHeader";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, error, status } = useSelector(PRODUCT_SELECTOR);
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  useEffect(() => {
    if (error !== null) {
      message.error(error);
    }
  }, [error]);
  useEffect(() => {
    if (status === "updated") {
      navigate(-1);
    }
  }, [status]);
  const saveDataHandler = (values) => {
    dispatch(editProduct({ id, product: values }));
  };
  return (
    <Page>
      <PageHeader
        title={"تعديل منتج"}
        paths={[
          {
            label: "البضاعة",
            link: "/products",
          },
          {
            label: "تعديل منتج",
            link: `/products/${id}`,
          },
        ]}
      />
      <Section>
        <Card>
          <ProductForm onFinish={saveDataHandler} product={product} />
        </Card>
      </Section>
    </Page>
  );
};
export default Product;
