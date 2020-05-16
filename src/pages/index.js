/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { Fragment } from "react";
import { tint, shade } from "@theme-ui/color";

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
      <IndexText />
      <div
        sx={{
          p: 3,
          bg: tint("primary", 0.9),
          color: shade("primary", 0.2),
          borderRadius: 8,
        }}
      >
        <p sx={{ fontSize: 2, m: 0, overflowWrap: "anywhere" }}>
          {!!data.site.siteMetadata.beaker ? (
            <Fragment>
              Also available on the old-school web{" "}
              <a
                href={data.site.siteMetadata.siteUrl}
                alt="Cosmic Computation Laboratory: http://"
                sx={{ variant: "styles.a" }}
              >
                https://cosmiccomputation.org
              </a>
            </Fragment>
          ) : (
            <Fragment>
              Also available on the peer-to-peer web with{" "}
              <a href="https://beakerbrowser.com/" alt="Beaker Browser">
                Beaker
              </a>{" "}
              <a
                href={data.site.siteMetadata.siteUrl}
                alt="Cosmic Computation Laboratory: hyper://"
                sx={{ variant: "styles.a" }}
              >
                {data.site.siteMetadata.siteUrl}
              </a>
            </Fragment>
          )}
        </p>
      </div>
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
        siteUrl
        beaker
      }
    }
  }
`;

export default IndexPage;
