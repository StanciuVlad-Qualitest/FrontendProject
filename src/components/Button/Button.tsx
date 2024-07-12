import { FC, ReactNode } from "react";
import { StyledButton } from "./styles";
import { ButtonVariants } from "./types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
}

export const Button: FC<Props> = ({
  children,
  ariaLabel,
  variant,
  onClick,
}) => (
  <StyledButton aria-label={ariaLabel} variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);
