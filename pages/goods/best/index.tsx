import Layout from "components/Layout";
import React from "react";
import { GoodsSS } from "../goods.style";

const BestPage = (): JSX.Element => {
  return (
    <Layout>
      <GoodsSS>
        <span>
          <div>베스트 페이지 </div>
        </span>
      </GoodsSS>
    </Layout>
  );
};

export default BestPage;
