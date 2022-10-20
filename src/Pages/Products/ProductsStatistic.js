import { BiDollarCircle, BiData } from "react-icons/bi";
import { Card, Col, Row, Statistic } from "antd";
import Section from "../../components/UI/Section/Section";
import { useSelector } from "react-redux";
import { PRODUCTS_SELECTOR } from "../../Constents/SelectorsConstent";
function calculateTotlePrice(products) {
  let total = 0;
  products.forEach((element) => {
    total += element.price * element.inStack;
  });
  return total;
}
const ProductsStatistic = () => {
  const { products } = useSelector(PRODUCTS_SELECTOR);
  return (
    <Section>
      <Card>
        <Row gutter={16}>
          <Col span={4}>
            <Statistic
              title="عدد البضاعة"
              value={products.length}
              prefix={<BiData />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="المبلغ الاجمالي"
              value={calculateTotlePrice(products)}
              prefix={<BiDollarCircle />}
            />
          </Col>
        </Row>
      </Card>
    </Section>
  );
};
export default ProductsStatistic;
