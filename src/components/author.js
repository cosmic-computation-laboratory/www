/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, Text, Heading } from "@theme-ui/components";
import { Link } from "gatsby";

export const Author = () => {
  return (
    <Box>
      J.H. Gold is an artist, musician, technologist & a founder of the{" "}
      <Link to="/" sx={{ variant: "styles.link" }}>
        Cosmic Computation Laboratory
      </Link>
    </Box>
  );
};
