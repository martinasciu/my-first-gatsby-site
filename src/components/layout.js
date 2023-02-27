import * as React from "react";

import { Link } from "gatsby";

const Layout = ({title, pageTitle, children }) => {
return (
    <>
    <title>{title}</title>
    <nav>
    <ul>
          <li><Link to="/">Home</Link></li> {/*NOTA BENE: Nel caso del link associato a "Home" non bisogna inserire /index nel tag per l'url, ma solo il carattere "/" altrimenti inserirà automaticamente la parola "index" dopo / nell'url e non ti porterà alla pagina iniziale.*/}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
    </nav>

    <h1>{pageTitle}</h1>
        {children}
    </>
)
};

export default Layout;