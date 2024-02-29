import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import {
  MainPostCardContainer,
  MainPostCardContent,
  MainPostCardInfo,
  MainPostCardTop,
  NavLinkContainer,
} from "./styles";

import gitHubLogo from "../../../../assets/github-logo.svg";
import calendarIcon from "../../../../assets/calendar-icon.svg";
import dialogIcon from "../../../../assets/bubbledialog-icon.svg";

import { PostInfo } from "../../../../contexts/GitContext";
import { sinceDate } from "../../../../utils/formatter";

interface MainPostCardProps {
  post: PostInfo;
}

export function MainPostCard({ post }: MainPostCardProps) {
  return (
    <MainPostCardContainer>
      <MainPostCardTop>
        <NavLinkContainer to="/" title="Home">
          <CaretLeft size={12} />
          <span>VOLTAR</span>
        </NavLinkContainer>
        <NavLinkContainer to={post.repository_url} title="Issue">
          <span>GITHUB</span>
          <ArrowSquareOut size={12} />
        </NavLinkContainer>
      </MainPostCardTop>

      <MainPostCardContent>
        <h1>{post ? post.title : ""}</h1>
        <MainPostCardInfo>
          <div>
            <img src={gitHubLogo} />
            <span>{post ? post.user.login : ""}</span>
          </div>
          <div>
            <img src={calendarIcon} />
            <span>{post ? sinceDate(post.created_at) : ""}</span>
          </div>
          <div>
            <img src={dialogIcon} />
            <span>{post ? post.comments : ""} comentários</span>
          </div>
        </MainPostCardInfo>
      </MainPostCardContent>
    </MainPostCardContainer>
  );
}
