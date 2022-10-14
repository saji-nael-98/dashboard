import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Card from "../../components/UI/Card/Card";
import Page from "../../components/UI/Page/Page";
import PageHeader from "../../components/UI/Page/PageHeader";
import Section from "../../components/UI/Section/Section";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/action/product-action";
import ProductsStatistic from "./ProductsStatistic";
import ProductsFilter from "./ProductsFilter";
import { useState } from "react";

const ProductsPage = () => {
  const products = useSelector((state) => state.products.products);
  const [productsState, setProductsState] = useState(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
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
      <ProductsStatistic products={products} />
      <ProductsFilter products={products} setProducts={setProductsState} />
      <Section>
        <Card>
          <ProductsTable data={productsState} />
        </Card>
      </Section>
    </Page>
  );
};
export default ProductsPage;
