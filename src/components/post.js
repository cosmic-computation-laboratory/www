/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import { Link } from "gatsby";
// import Image from "../components/image";
import Layout from "./layout";
import { Author } from "./author";
import SEO from "./seo";
import Image from "./image";

export const Post = (props) => (
  <Layout>
    <SEO title={props.title} description={props.excerpt} article />
    <div
      sx={{
        maxWidth: "measure",
        mx: "auto",
      }}
    >
      <Box
        as="figure"
        sx={{
          width: [`75px`, `150px`],
          mb: [1, 2, 4],
          mx: 0,
          mt: [1, 2, 4],
        }}
      >
        <Link to="/">
          <Image />
        </Link>
      </Box>
      <Styled.h1>{props.title}</Styled.h1>
      <div
        sx={{
          display: "flex",
        }}
      >
        <div
          sx={{
            mr: 3,
          }}
        >
          {props.date}
        </div>
        {/* {opts.tags && <TagsList tags={tags} />} */}
      </div>
      <div
        sx={{
          maxWidth: "measure",
          mx: "auto",
          // fontSize: 3,
          " em": {
            color: "primary",
          },
        }}
      >
        {props.children}
      </div>
      <Author />
    </div>
    {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
  </Layout>
);
