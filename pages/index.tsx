import Layout from "components/Layout";
import React from "react";
import MainContainer from "controllers/MainController/Main.Container";
import LikeButtonContainer from "@/components/_Common/Button/Like/LikeButton.Container";
const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      {/* <LikeButtonContainer />  좋아요 기능 실험*/}
      <MainContainer />

      <main className={"styles.main"}>
        <h1 className={"styles.title"}></h1>
        <p className={"styles.description"}>
          {/*<code className={"styles.code"}></code>*/}
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
