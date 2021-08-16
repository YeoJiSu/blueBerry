import Layout from "components/Layout";
import React from "react";
import { GoodsSS } from "../goods.style";

const BestPage = (): JSX.Element => {
  return (
    <Layout>
      <GoodsSS>
        <div className={"title"}>BEST</div>
      </GoodsSS>
    </Layout>
  );
};

export default BestPage;
