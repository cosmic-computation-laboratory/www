import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import Header from '../components/Header'
import Image from "../components/image"
import SEO from "../components/seo"
import { Flex, Box, Link as RLink, Text } from '@rebass/emotion'
import { ParagraphText, Heading1, Heading2, Heading3 } from '../components/typography';
import MDXRenderer from "gatsby-mdx/mdx-renderer";

const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: ParagraphText,
  // blockquote: props => {
  //   console.log(props);
  //   return <BigQuote {...props} />
  // }
};


class JournalEntry extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const post = data.mdx;

    return <Layout location={this.props.location}>
      <div>
        <Header siteTitle={siteTitle} />
        <Box px={3} py={3} style={{ maxWidth: 960, margin: '0 auto' }}>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <Heading1>{post.frontmatter.title}</Heading1>
          <Text fontWeight='bold' mt={4} mb={4} fontFamily='sans'>{post.frontmatter.date}</Text>
          <MDXRenderer components={components}>{post.code.body}</MDXRenderer>
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
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, 0YYYY")
      }
    }

  }
`;

export default JournalEntry;