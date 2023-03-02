//Step1: import React
import * as React from "react";

//import the Link component - used as an <a> tag in HTML to put links on the page. You can use it to creat menus
import { Link } from "gatsby";

//importare il layout
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"


//Step 2: define your components
const Homepage = () => {
return (

<Layout Title="Home" pageTitle="Home" >

<StaticImage 
        alt="monte molare"
        src="../images/montemolare.jpg"/>

    
<p>Questa è la Home page del mio primo sito con Gatsby. Stocostruendo il sito seguendo il tutorial ufficiale su <Link to="https://www.gatsbyjs.com/docs/tutorial/">gatsbyjs.com</Link>.</p>

<p>A differenza del normale HTML, con React, per inserire un link devi utlizzare il tag: &lt;Link to="urlsito"&gt; nome link &lt;/Link&gt;. NOTA BENE: il tag Link inizia con la lettera maiuscola perchè va a richiamare la componente "Link" importata da Gatsby.</p>

<h2>Aggiungere lo style con CSS modules</h2>


    
</Layout>

 )
};

//Step 3: export your components


export default Homepage;