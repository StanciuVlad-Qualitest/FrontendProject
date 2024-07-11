import styled from "styled-components";
import { Theme } from "../../theme/types";
import { ButtonVariants } from "./types";

const getButtonStyles = (theme: Theme, variant?: ButtonVariants) => {
  switch (variant) {
    case "primary":
      return `
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
    case "secondary":
      return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
        `;
    default:
      return "";
  }
};

export const StyledButton = styled.button<{ variant?: ButtonVariants }>`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme, variant }) => getButtonStyles(theme as Theme, variant)}
`;
