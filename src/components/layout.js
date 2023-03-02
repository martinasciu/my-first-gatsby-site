import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import { 
    container,
heading,
navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  } 
from "./layout.module.css";

const Layout = ({title, pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
`);

console.log(data);
return (
    <main className={container}>
    <title>
        {pageTitle} | {data.site.siteMetadata.title}
        </title>
    <p className={siteTitle}>{data.site.siteMetadata.title}</p>
    <nav>
    <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li> {/*NOTA BENE: Nel caso del link associato a "Home" non bisogna inserire /index nel tag per l'url, ma solo il carattere "/" altrimenti inserirà automaticamente la parola "index" dopo / nell'url e non ti porterà alla pagina iniziale.*/}
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contacts</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
        </ul>
    </nav>

    <h1 className={heading}>{pageTitle}</h1> {children}
        
          

    </main>
   
)
};

export default Layout;