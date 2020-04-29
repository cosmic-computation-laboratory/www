/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "normalize.css";
import "../webfonts/CCL.css";
import { Flex, Text } from "@theme-ui/components";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Styled.root>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        {children}
        <Flex
          sx={{
            // bg: "primary",
            px: 3,
            py: 3,
            flexDirection: ["column", "row"],
            justifyContent: "center",
          }}
        >
          <Text
            sx={{
              textAlign: ["center"],
              mr: 1,
            }}
          >
            © 02019&ndash;∞, {data.site.siteMetadata.title}.
          </Text>
          <Text
            sx={{
              textAlign: ["center"],
            }}
          >
            Portland, OR
          </Text>
        </Flex>
      </Flex>
    </Styled.root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
