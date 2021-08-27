import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const RecordPage = ({ data }) => {
  return (
    <Layout pageTitle="（施工中……">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/record/${node.slug}`}>
              {node.frontmatter.my_score
                ? node.frontmatter.armor_alias[0] +
                  ` ` +
                  node.frontmatter.boss_alias +
                  ` ` +
                  node.frontmatter.my_score +
                  `/` +
                  node.frontmatter.score
                : node.frontmatter.armor_alias[0] +
                  ` ` +
                  node.frontmatter.boss_alias +
                  ` ` +
                  node.frontmatter.score}
            </Link>
          </h2>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query GetArenaRecordLists {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          score
          my_score
          boss_alias
          armor_alias
        }
      }
    }
  }
`;

export default RecordPage;
