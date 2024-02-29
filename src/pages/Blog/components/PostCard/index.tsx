import { PostInfo } from "../../../../contexts/GitContext";
import { PostCardContainer } from "./styles";
import { sinceDate } from "../../../../utils/formatter";

interface PostCardProps {
  post: PostInfo;
  id: number;
}

export function PostCard({ post, id }: PostCardProps) {
  const to = `/post/${id}`;

  return (
    <PostCardContainer to={to}>
      <div>
        <h1>{post.title}</h1>
        <span>{sinceDate(post.created_at)}</span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  );
}
