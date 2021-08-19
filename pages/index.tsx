import Layout from "components/Layout";
import React from "react";
import MainContainer from "controllers/MainController/Main.Container";
const IndexPage = (): JSX.Element => {
  return (
    <Layout>
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
