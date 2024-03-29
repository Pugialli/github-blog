import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainProfileCardContainer = styled.div`
  position: relative;
  width: 54rem;
  height: 13.25rem;
  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;

  display: flex;
  padding: 2rem 2.5rem;
  gap: 2rem;
  margin-top: -6.625rem;
  margin-bottom: 4.5rem;

  filter: drop-shadow(#000 0px 2px 5px);
`;

export const AvatarPicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const MainProfileCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainProfileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.title};
    font-weight: bold;
    line-height: 130%;
    font-size: 1.5rem;
  }

  p {
    height: 3.25rem;
    color: ${(props) => props.theme.text};
    line-height: 160%;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const MainProfileCardInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const GithubLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};

  cursor: pointer;

  span {
    font-weight: bold;
    line-height: 160%;
    font-size: 0.75rem;
  }
`;
