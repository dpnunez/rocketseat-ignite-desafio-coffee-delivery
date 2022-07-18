import { IconProps } from "phosphor-react";
import { useTheme } from "styled-components";
import { IconButtonContainer } from "./styles";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "small" | "big";
  title: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const IconButton: React.FC<IconButtonProps> = ({
  size = "big",
  title,
  icon: Icon,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <IconButtonContainer size={size} {...props}>
      <Icon size={16} color={colors.purple.DEFAULT} />
      {title}
    </IconButtonContainer>
  );
};
