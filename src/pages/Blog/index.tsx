import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { PostsList } from "./components/PostsList";
import { SearchBar } from "./components/SearchBar";
import { BlogContainer, BlogHead } from "./styles";

export function Blog() {
  return (
    <>
      <Header />
      <BlogContainer>
        <MainCard />
        <BlogHead>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </BlogHead>
        <SearchBar />
        <PostsList />
      </BlogContainer>
    </>
  );
}
