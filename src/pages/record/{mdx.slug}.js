import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

const RecordPost = ({ data }) => {
  return (
    <Layout
      pageTitle={
        data.mdx.frontmatter.armor_alias[0] + ` ` + data.mdx.frontmatter.boss_alias
      }
    >
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        boss_alias
        armor_alias
      }
      body
    }
  }
`;

export default RecordPost;
