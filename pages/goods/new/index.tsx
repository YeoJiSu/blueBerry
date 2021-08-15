import Layout from "components/Layout";
import React from "react";
import { GoodsSS } from "../goods.style";

const NewPage = (): JSX.Element => {
  return (
    <Layout>
      <GoodsSS>
        <span>새상품 페이지 </span>
      </GoodsSS>
    </Layout>
  );
};

export default NewPage;
