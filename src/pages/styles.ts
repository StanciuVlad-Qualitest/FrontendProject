import styled from "styled-components";
import img from "../images/thumbnail-what-is-a-relational-database.webp";
export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  align-items: center;
  box-sizing: border-box;
  & p {
    color: green;
    font-weight: bold;
    font-style: italic;
  }
`;
