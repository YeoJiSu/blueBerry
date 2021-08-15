import Layout from "components/Layout";
import React from "react";
import { ServiceSS } from "./service.style";

const OrderInquiryPage = (): JSX.Element => {
  return (
    <Layout>
      <ServiceSS>
        <span>
          <div>주문조회</div>
        </span>
      </ServiceSS>
    </Layout>
  );
};

export default OrderInquiryPage;
