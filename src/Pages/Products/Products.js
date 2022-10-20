import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Card from "../../components/UI/Card/Card";
import Page from "../../components/UI/Page/Page";
import PageHeader from "../../components/UI/Page/PageHeader";
import Section from "../../components/UI/Section/Section";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsStatistic from "./ProductsStatistic";
import ProductsFilter from "./ProductsFilter";
import { getProducts } from "../../store/action/products-action";
const ProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Page>
      <PageHeader
        title={"البضاعة"}
        paths={[
          {
            label: "البضاعة",
            link: "/products",
          },
        ]}
      />
      <ProductsStatistic />
      <ProductsFilter />
      <Section>
        <Card>
          <ProductsTable />
        </Card>
      </Section>
    </Page>
  );
};
export default ProductsPage;
