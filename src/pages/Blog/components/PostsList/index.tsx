import { PostCard } from "../PostCard";
import { PostListContainer } from "./styles";

export function PostsList() {
  return (
    <PostListContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostListContainer>
  );
}
