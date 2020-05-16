/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "./layout";
import { Hero } from "./hero";
import { PostsList } from "./posts-list";

export const Posts = ({ posts }) => {
  return (
    <Layout>
      <Hero />
      <PostsList posts={posts} />
    </Layout>
  );
};
