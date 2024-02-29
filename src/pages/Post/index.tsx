import { useParams } from "react-router-dom";
import { MainPostCard } from "./components/MainPostCard";
import { PostContainer, PostContent } from "./styles";
import { useContext, useEffect, useState } from "react";
import { GitContext, PostInfo } from "../../contexts/GitContext";

export function Post() {
  const [post, setPost] = useState({
    id: 0,
    user: {
      login: "",
    },
    repository_url: "",
    title: "",
    body: "",
    created_at: new Date(),
    comments: 0,
  } as PostInfo);
  const postId = String(useParams().id);
  const { fetchPost } = useContext(GitContext);

  useEffect(() => {
    fetchPost(postId).then((result) => {
      setPost(result);
    });
  }, [fetchPost, postId]);

  return (
    <PostContainer>
      <MainPostCard post={post} />
      <PostContent>{post ? post.body : ""} </PostContent>
      {/* <CodeInsert>
        <p>
          let foo = 42; //foo is now a number foo = ‘bar’; // foo is now a
          string foo = true; // foo is now a boolean
        </p>
      </CodeInsert> */}
    </PostContainer>
  );
}
