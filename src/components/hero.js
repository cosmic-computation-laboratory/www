/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, Link, Text, Heading } from "@theme-ui/components";

import Image from "../components/image";

export const Hero = ({ metadata }) => (
  <Flex
    sx={{
      bg: "primary",
      px: 4,
      py: 3,
      flexDirection: "column",
      flex: "1 0 auto",
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
      <Image />
    </Box>
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <Heading variant="hero">
        {metadata.title.split(" ").map((t) => (
          <Text display="block" key={t}>
            {t}
          </Text>
        ))}
      </Heading>
      <Heading variant="subhero">{metadata.description}</Heading>
    </Flex>
    <Text sx={{ fontFamily: "sans", mb: 3 }}>
      <Link
        sx={{
          color: "white",
          mr: 2,
          fontSize: 1,
        }}
        href={`mailto:${metadata.email}`}
      >
        Email
      </Link>
      <Link
        sx={{
          color: "white",
          mr: 2,
          fontSize: 1,
        }}
        href={`https://twitter.com/${metadata.author}`}
      >
        Twitter
      </Link>
      <Link
        sx={{
          color: "white",
          mr: 2,
          fontSize: 1,
        }}
        href={`https://github.com/cosmic-computation-laboratory`}
      >
        GitHub
      </Link>
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
