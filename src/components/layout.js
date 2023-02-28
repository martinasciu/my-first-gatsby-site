import * as React from "react";

import { Link } from "gatsby";

import { 
    container,
heading,
navLinks,
  navLinkItem,
  navLinkText,
  paragraph } 
from "./layout.module.css";

const Layout = ({title, pageTitle, children }) => {
return (
    <>
    <title>{title}</title>
    <div className={container}>
    <nav>
    <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li> {/*NOTA BENE: Nel caso del link associato a "Home" non bisogna inserire /index nel tag per l'url, ma solo il carattere "/" altrimenti inserirà automaticamente la parola "index" dopo / nell'url e non ti porterà alla pagina iniziale.*/}
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contacts</Link></li>
        </ul>
    </nav>

    <h1 className={heading}>{pageTitle}</h1> {children}
        

<h2 className={heading}></h2>
          

    </div>
    </>
)
};

export default Layout;