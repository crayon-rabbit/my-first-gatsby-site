import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="自己读取（自己储存的）数据">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query GetBlogLists {
    allMdx(
      filter: { slug: { regex: "/^blog-/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
        }
        slug
        id
      }
    }
  }
`;

export default BlogPage;
