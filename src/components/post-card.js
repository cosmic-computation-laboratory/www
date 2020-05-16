/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import Image from "gatsby-image";

export const PostCard = ({ slug, image, title, excerpt, date }) => (
  <div>
    {image && image.childImageSharp && (
      <Link to={slug}>
        <Styled.img
          as={Image}
          fluid={image.childImageSharp.fluid}
          alt={title}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: [256],
            mb: 3,
          }}
        />
      </Link>
    )}
    <Styled.h2
      sx={{
        mt: 0,
        variant: "text.linkedHeading",
      }}
    >
      <Link to={slug}>{title}</Link>
    </Styled.h2>
    <Styled.p
      sx={{
        mb: 0,
      }}
    >
      {excerpt}
    </Styled.p>
    <div
      sx={{
        fontSize: 0,
      }}
    >
      {date}
    </div>
  </div>
);
