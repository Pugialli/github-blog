import styled from "styled-components";
import Markdown from "react-markdown";

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 14rem;
  width: 54rem;
`;
export const PostContent = styled(Markdown)`
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  color: ${(props) => props.theme.text};
  line-height: 160%;
  font-size: 0.875rem;
`;
