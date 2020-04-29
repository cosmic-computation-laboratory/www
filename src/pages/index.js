import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import IndexText from "../components/indexText";
import { Container } from "theme-ui";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Cosmic Computation Laboratory`,
        `R&D`,
        `Emergent Technology`,
        `Entheotechnology`,
      ]}
    />
    <Hero metadata={data.site.siteMetadata} />
    <Container>
      <IndexText sx={{}} />
    </Container>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
        email
      }
    }
  }
`;

export default IndexPage;
