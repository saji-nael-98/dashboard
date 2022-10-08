import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import ProductForm from "../../components/UI/ProductForm/ProductForm";
import Section from "../../components/UI/Section/Section";

const AddProduct = () => {
  return (
    <DashboardPage>
      <Section>
        <ProductForm />
      </Section>
    </DashboardPage>
  );
};
export default AddProduct;
