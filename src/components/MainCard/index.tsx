import { ArrowSquareOut } from "phosphor-react";
import {
  AvatarPicture,
  GithubLink,
  MainCardContainer,
  MainCardContent,
  MainCardInfo,
  MainCardTop,
} from "./styles";
import gitHubLogo from "../../assets/github-logo.svg";
import companyIcon from "../../assets/company-icon.svg";
import followersIcon from "../../assets/followers-icon.svg";

export function MainCard() {
  return (
    <MainCardContainer>
      <AvatarPicture src="https://avatars.githubusercontent.com/u/5952940?v=4" />
      <MainCardContent>
        <MainCardTop>
          <h1>Cameron Williamson</h1>
          <GithubLink>
            <span>GITHUB</span>
            <ArrowSquareOut size={12} />
          </GithubLink>
        </MainCardTop>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <MainCardInfo>
          <div>
            <img src={gitHubLogo} />
            <span>username</span>
          </div>
          <div>
            <img src={companyIcon} />
            <span>company</span>
          </div>
          <div>
            <img src={followersIcon} />
            <span>followers</span>
          </div>
        </MainCardInfo>
      </MainCardContent>
    </MainCardContainer>
  );
}
