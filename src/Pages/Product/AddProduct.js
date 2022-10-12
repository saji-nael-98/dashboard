import DashboardPage from "../../components/UI/DashboardPage/DashboardPage";
import ProductForm from "../../components/ProductForm/ProductForm";
import Section from "../../components/UI/Section/Section";

const AddProduct = () => {
  return (
    <DashboardPage title='اضافة منتج' links={[]}>
      <Section>
        <ProductForm />
      </Section>
    </DashboardPage>
  );
};
export default AddProduct;
