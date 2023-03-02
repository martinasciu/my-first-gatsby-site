import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
    console.log(data);
    return (
<Layout Title="Blog" pageTitle="Blog">
    <ul>
    {data.allFile.nodes.map(node => (
 <li key={node.name}>{node.name}</li>
    
    
    ))}
    </ul>
</Layout>
    )
};

export const query = graphql `query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }`

export default Blog;