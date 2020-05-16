/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, Link, Text, Heading } from "@theme-ui/components";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import Image from "./image";

export const Hero = () => {
  const data = useStaticQuery(query);

  return (
    <Flex
      sx={{
        bg: "primary",
        px: 4,
        py: 3,
        flexDirection: "column",
        // flex: "1 0 auto",
        alignItems: ["center"],
      }}
    >
      <Box
        as="figure"
        sx={{
          width: [`75px`, `150px`],
          mb: [2, 4],
          mt: [1, 4, 5],
        }}
      >
        <Link to="/">
          <Image />
        </Link>
      </Box>
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Heading variant="hero">
          {data.site.siteMetadata.title.split(" ").map((t) => (
            <Text display="block" key={t}>
              {t}
            </Text>
          ))}
        </Heading>
        <Heading variant="subhero">
          Exploring alternate futures for mind, body, spirit & planet
        </Heading>
      </Flex>
      <Text sx={{ fontFamily: "sans", mb: 3 }}>
        <Link
          sx={{
            color: "white",
            mr: 2,
            fontSize: 1,
          }}
          href={`mailto:${data.site.siteMetadata.email}`}
        >
          Email
        </Link>
        <Fragment>
          {data.site.siteMetadata.social.map((s) => (
            <Link
              key={s.name}
              sx={{
                color: "white",
                mr: 2,
                fontSize: 1,
              }}
              href={s.url}
            >
              {s.name}
            </Link>
          ))}
        </Fragment>

        <Link
          sx={{
            color: "white",
            mr: 2,
            fontSize: 1,
          }}
          href={`https://tinyletter.com/cosmic`}
        >
          Newsletter
        </Link>
      </Text>
    </Flex>
  );
};

const query = graphql`
  query HeroQuery {
    site {
      siteMetadata {
        title
        description
        author
        email
        siteUrl
        beaker
        social {
          name
          url
        }
      }
    }
  }
`;
