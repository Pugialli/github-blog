import { useContext } from "react";
import { PostCard } from "../PostCard";
import { PostListContainer } from "./styles";
import { GitContext } from "../../../../contexts/GitContext";

export function PostsList() {
  const { posts } = useContext(GitContext);

  return (
    <PostListContainer>
      {posts
        ? posts.map((post, index) => {
            return (
              <PostCard
                key={posts.length - index}
                id={posts.length - index}
                post={post}
              />
            );
          })
        : ""}
    </PostListContainer>
  );
}
