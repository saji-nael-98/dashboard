import Page from "../../components/UI/Page/Page";
import PageHeader from "../../components/UI/Page/PageHeader";
import ProductForm from "../../components/ProductForm/ProductForm";
import Card from "../../components/UI/Card/Card";
import Section from "../../components/UI/Section/Section";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../../store/action/product-action";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveDataHandler = (values) => {
    dispatch(saveProduct(values));
    navigate(-1);
  };
  return (
    <Page>
      <PageHeader
        title={"اضافة جديد"}
        paths={[
          {
            label: "البضاعة",
            link: "/products",
          },
          {
            label: "أضافة منتج",
            link: "/products/new",
          },
        ]}
      />
      <Section>
        <Card>
          <ProductForm onFinish={saveDataHandler} />
        </Card>
      </Section>
    </Page>
  );
};
export default NewProduct;
