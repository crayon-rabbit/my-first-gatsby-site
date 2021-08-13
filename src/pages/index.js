// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="首页标题">
      <p>首页</p>
      <StaticImage src="../images/600.jpg" alt="A kitten" />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;