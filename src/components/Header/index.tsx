import coverImg from "../../assets/cover.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} />
    </HeaderContainer>
  );
}
