import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import "./layout.css"
import "../webfonts/CCL.css"
import { Box, Flex, Text } from "@rebass/emotion";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Flex
          flexDirection='column'
          justifyContent='space-between'
          style={{ minHeight: '100vh' }}
        >
          {children}
          <Flex bg='blue' px={3} py={3} flexDirection={[' column', 'row']} justifyContent='center'>
            <Text textAlign={['left', 'center']} fontSize={0} fontFamily='sans' color='white' mr={1}>
              © 02019&ndash;∞, {data.site.siteMetadata.title}.
              </Text>
            <Text textAlign={['left', 'center']} fontSize={0} fontFamily='sans' color='white'>
              Nevada City, CA
              </Text>
          </Flex>
        </Flex>
      </ThemeProvider >
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
