import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Flex, Heading } from '@rebass/emotion'
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <Box bg='blue' px={3} py={2}>
    <Flex flexDirection='row' alignItems='center' style={{ margin: '0 auto', maxWidth: 960 }}>
      <Box style={{ width: 72 }} mr={2}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
        </Link>
      </Box>
      <Heading fontFamily='serif'>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Flex>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
