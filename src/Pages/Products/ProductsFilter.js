import { Button, Card, Select, Space } from "antd";
import Search from "antd/lib/input/Search";
import Section from "../../components/UI/Section/Section";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NEW_PRODUCT_PATH } from "../../Constents/RouteConstents";
import { PRODUCT_CATEGORY } from "../../Constents/ProductConstent";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/slices/products-slice";

const ProductsFilter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSearchHandler = (value) => {
    dispatch(productsActions.findProductsByName(value));
  };
  const onClickSelectHandler = (value) => {
    dispatch(productsActions.findProductsByCategory(value));
  };
  const onClearHandler = () => {
    dispatch(productsActions.clearFilters());
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
            onClear={onClearHandler}
          >
            {PRODUCT_CATEGORY.map((item, index) => (
              <Select.Option value={index} key={index}>
                {item}
              </Select.Option>
            ))}
          </Select>

          <Search
            placeholder="ابحث عن المنتج"
            allowClear
            onClear={onClearHandler}
            onSearch={onSearchHandler}
            style={{
              width: "14rem",
            }}
          />
        </Space>
        <Button
          onClick={() => {
            navigate(NEW_PRODUCT_PATH);
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
export default ProductsFilter;
