import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Flex, Heading, Box, Link, Text } from '@rebass/emotion'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`Cosmic Computation Laboratory`, `R&D`, `Emergent Technology`, `Entheotechnology`]} />
    <Flex flexDirection='column' justifyContent='space-between' alignItems={['left', 'center']}>
      <Box style={{ width: `150px` }} mb={[2, 4]} mt={[1, 4, 5]}>
        <Image />
      </Box>
      <Flex flexDirection='column'>
        <Heading lineHeight={0.9} mb={4} textAlign={['left', 'center']} fontSize={[6, 8]} fontFamily='serif' color='white'>
          {data.site.siteMetadata.title.split(' ').map(t => <Text display='block'>{t}</Text>)}</Heading>
        <Text textAlign={['left', 'center']} fontSize={[3, 4]} mb={[4, 5]} color='white' fontFamily='serif' fontWeight='bold'>{data.site.siteMetadata.description}</Text>
      </Flex>
      <Text fontFamily='sans'>
        <Link color='white' mr={2} fontSize={1} fontFamily='sans' href={`mailto:${data.site.siteMetadata.email}`}>Email</Link>
        <Link color='white' mr={2} fontSize={1} fontFamily='sans' href={`https://twitter.com/${data.site.siteMetadata.author}`}>Twitter</Link>
        <Link color='white' mr={2} fontSize={1} fontFamily='sans' href={`https://tinyletter.com/cosmic`}>Newsletter</Link>
      </Text>
    </Flex>
  </Layout >
)

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

export default IndexPage
