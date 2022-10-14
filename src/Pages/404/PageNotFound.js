import { Result } from "antd";
import Page from "../../components/UI/Page/Page";

const PageNotFound = () => {
  return (
    <Page>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </Page>
  );
};
export default PageNotFound;
