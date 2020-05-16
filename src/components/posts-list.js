/** @jsx jsx */
import { jsx } from "theme-ui";
import { PostCard } from "./post-card";

const layout = "list";

export const PostsList = ({ posts }) => (
  <ul
    sx={{
      listStyle: "none",
      p: 0,
      variant: `layouts.${layout}`,
    }}
  >
    {posts.map((post) => (
      <li key={post.id}>
        <PostCard {...post} />
      </li>
    ))}
  </ul>
);
