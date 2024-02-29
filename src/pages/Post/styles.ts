import styled from "styled-components";

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 14rem;
  width: 54rem;
`;
export const PostContent = styled.p`
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  color: ${(props) => props.theme.text};
  line-height: 160%;
  font-size: 0.875rem;
`;

export const CodeInsert = styled.div`
  width: 51rem;
  p {
    padding: 1rem 1rem;
    background: ${(props) => props.theme.post};
    color: ${(props) => props.theme.text};
    line-height: 160%;
    font-size: 1rem;
  }
`;
