import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import Header from '../components/Header'
import Image from "../components/image"
import SEO from "../components/seo"
import { Flex, Heading, Box, Link as RLink, Text } from '@rebass/emotion'

class Journal extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges


    return <Layout location={this.props.location}>
      <Header siteTitle={siteTitle} />
      <Box px={3} py={3} style={{ maxWidth: 960, margin: '0 auto' }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Heading fontFamily='serif' fontSize={[5, 6, 8]} lineHeight={0.9}>
                <Link color='black' to={node.fields.slug} style={{ textDecoration: 'none' }}>
                  {title}
                </Link>
              </Heading>
              <Text fontWeight='bold' mt={3} mb={2} fontFamily='sans'>{node.frontmatter.date}</Text>
              <Text fontSize={3} lineHeight={1.4} fontFamily='sans' style={{ maxWidth: '32em' }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Box>
    </Layout>
  }
}

export const query = graphql`
  query JournalQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, 0YYYY")
            title
          }
        }
      }
    }
  }
`;

export default Journal;