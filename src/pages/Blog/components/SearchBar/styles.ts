import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 54rem;
  padding-top: 0.75rem;
  padding-bottom: 3rem;
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.input};
    color: ${(props) => props.theme.label};
    border: 1px solid ${(props) => props.theme.border};
  }
`;
