import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Post } from "../../components/post";

export default (props) => {
  const children = <MDXRenderer children={props.data.blogPost.body} />;

  return (
    <Post
      {...props}
      {...props.data}
      {...props.data.blogPost}
      children={children}
    />
  );
};
