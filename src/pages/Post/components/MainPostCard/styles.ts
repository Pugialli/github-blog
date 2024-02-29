import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainPostCardContainer = styled.div`
  position: relative;
  width: 54rem;
  height: 10.5rem;
  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  margin-top: -6.625rem;
  margin-bottom: 4.5rem;

  filter: drop-shadow(#000 0px 2px 5px);
`;

export const MainPostCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const MainPostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme.title};
    font-weight: bold;
    line-height: 130%;
    font-size: 1.5rem;
  }
`;

export const MainPostCardInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const NavLinkContainer = styled(NavLink)`
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
