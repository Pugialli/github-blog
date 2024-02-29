import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PostCardContainer = styled(NavLink)`
  text-decoration: none;

  height: 16.25rem;
  width: 26rem;
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  h1 {
    width: 60%;
    color: ${(props) => props.theme.title};
    font-weight: bold;
    line-height: 160%;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  span {
    color: ${(props) => props.theme.span};
    line-height: 160%;
    font-size: 0.875rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.text};
    line-height: 160%;
    font-size: 1rem;
  }
`;
