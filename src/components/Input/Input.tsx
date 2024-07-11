import { FC, forwardRef, ForwardedRef } from "react";
import { StyledInput } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}
export const Input: FC<Props & React.RefAttributes<HTMLInputElement>> =
  forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <StyledInput ref={ref} {...props} type={props.type} />;
  });
