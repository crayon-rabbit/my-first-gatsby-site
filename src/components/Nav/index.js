import * as React from "react";
import { Link } from "gatsby";
import {
  nav,
  navItem,
  navText,
} from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={nav}>
        <li className={navItem}>
          <Link to="/" className={navText}>
            主页
          </Link>
        </li>
        <li className={navItem}>
          <Link to="/blog" className={navText}>
            博客页面
          </Link>
        </li>
        <li className={navItem}>
          <Link to="/form" className={navText}>
            表单页面
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
