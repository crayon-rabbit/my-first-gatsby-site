import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  const list = data.allMdx.nodes.filter(item => item.slug !== 'test')
  return (
    <Layout pageTitle="自己读取（自己储存的）数据">
      {list.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>
            Posted: {node.frontmatter.date}
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          date
          title
        }
        slug
        id
      }
    }
  }
`;

export default BlogPage;
