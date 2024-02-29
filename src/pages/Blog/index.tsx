import { useContext } from "react";
import { MainProfileCard } from "./components/MainProfileCard";
import { PostsList } from "./components/PostsList";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer, BlogHead } from "./styles";
import { GitContext } from "../../contexts/GitContext";

export function Blog() {
  const { posts } = useContext(GitContext);
  return (
    <BlogContainer>
      <MainProfileCard />

      <BlogHead>
        <h1>Publicações</h1>
        <span>{posts.length} publicações</span>
      </BlogHead>
      <SearchForm />
      <PostsList />
    </BlogContainer>
  );
}
