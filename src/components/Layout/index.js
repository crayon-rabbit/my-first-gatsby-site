import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Nav from "../Nav";
import {
  layout,
  heading,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layout}>
      <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <Nav />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
