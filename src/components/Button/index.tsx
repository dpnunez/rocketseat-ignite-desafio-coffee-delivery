import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <ButtonContainer {...props}>{title}</ButtonContainer>
);
