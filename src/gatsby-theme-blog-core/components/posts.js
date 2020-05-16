import React from "react";
import { Posts } from "../../components/posts";

export default (props) => {
  const posts = props.data.allBlogPost.edges.map((e) => e.node);

  return <Posts {...props} posts={posts} />;
};
