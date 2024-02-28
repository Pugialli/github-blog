import styled from "styled-components";

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14rem;
`;

export const BlogHead = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0 18rem; */
  padding-top: 4.5rem;
  width: 54rem;

  h1 {
    color: ${(props) => props.theme.subtitle};
    font-weight: bold;
    line-height: 160%;
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme.span};
    line-height: 160%;
    font-size: 0.875rem;
  }
`;
