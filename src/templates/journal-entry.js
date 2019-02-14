import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import Header from '../components/Header'
import Image from "../components/image"
import SEO from "../components/seo"
import { Flex, Box, Link as RLink, Text } from '@rebass/emotion'
import rehypeReact from 'rehype-react'
import { ParagraphText, Heading } from '../components/typography';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    p: ParagraphText,
  },
}).Compiler


class JournalEntry extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const post = data.markdownRemark;

    return <Layout location={this.props.location}>
      <div>
        <Header siteTitle={siteTitle} />
        <Box px={3} py={3} style={{ maxWidth: 960, margin: '0 auto' }}>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <Heading>{post.frontmatter.title}</Heading>
          <Text fontWeight='bold' mt={4} mb={4} fontFamily='sans'>{post.frontmatter.date}</Text>
          {renderAst(post.htmlAst)}
          <Box my={4}>
            <Text mb={3} fontSize={6} fontFamily='stamp'>It is important to expect nothing, to take every experience, including the negative ones, as merely steps on the path, and to proceed</Text>
            <Text fontSize={2} fontFamily='sans'>—Ram Dass</Text>
          </Box>
          {renderAst(post.htmlAst)}
        </Box>
      </div>
    </Layout>
  }
}

export const query = graphql`
  query JournalEntryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(fields: { slug: { eq: $slug } }) {
      id
      rawBody
      frontmatter {
        title
        date(formatString: "MMMM DD, 0YYYY")
      }
    }

  }
`;

export default JournalEntry;