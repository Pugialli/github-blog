import { ArrowSquareOut } from "phosphor-react";
import {
  AvatarPicture,
  GithubLink,
  MainProfileCardContent,
  MainProfileCardInfo,
  MainProfileCardTop,
  MainProfileCardContainer,
} from "./styles";
import gitHubLogo from "../../../../assets/github-logo.svg";
import companyIcon from "../../../../assets/company-icon.svg";
import followersIcon from "../../../../assets/followers-icon.svg";
import { useContext } from "react";
import { GitContext } from "../../../../contexts/GitContext";

export function MainProfileCard() {
  const { myProfile } = useContext(GitContext);

  return (
    <MainProfileCardContainer>
      <AvatarPicture src={myProfile.avatarURL} />
      <MainProfileCardContent>
        <MainProfileCardTop>
          <h1>{myProfile.name}</h1>
          <GithubLink to={myProfile.gitLink}>
            <span>GITHUB</span>
            <ArrowSquareOut size={12} />
          </GithubLink>
        </MainProfileCardTop>

        <p>{myProfile.bio}</p>
        <MainProfileCardInfo>
          <div>
            <img src={gitHubLogo} />
            <span>{myProfile.profile}</span>
          </div>
          <div>
            <img src={companyIcon} />
            <span>{myProfile.company}</span>
          </div>
          <div>
            <img src={followersIcon} />
            <span>{myProfile.followers}</span>
          </div>
        </MainProfileCardInfo>
      </MainProfileCardContent>
    </MainProfileCardContainer>
  );
}
