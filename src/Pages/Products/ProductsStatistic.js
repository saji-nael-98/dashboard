import { memo } from "react";
import { BiDollarCircle, BiData } from "react-icons/bi";
import { Card, Col, Row, Statistic } from "antd";
import Section from "../../components/UI/Section/Section";

const ProductsStatistic = (props) => {
  let totalPrice = 0;
  function calculateTotlePrice(item) {
    totalPrice += item.price * item.inStack;
  }
  props.products.forEach(calculateTotlePrice);
  return (
    <Section>
      <Card>
        <Row gutter={16}>
          <Col span={4}>
            <Statistic
              title="عدد البضاعة"
              value={props.products.length}
              prefix={<BiData />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="المبلغ الاجمالي"
              value={totalPrice}
              prefix={<BiDollarCircle />}
            />
          </Col>
        </Row>
      </Card>
    </Section>
  );
};
export default memo(ProductsStatistic);
