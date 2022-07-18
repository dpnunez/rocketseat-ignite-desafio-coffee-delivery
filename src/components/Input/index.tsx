import { forwardRef } from "react";
import { InputContainer, InputField, OptionalText } from "./styles";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <InputContainer>
    <InputField ref={ref} {...props} />
    {!props.required && <OptionalText>Opcional</OptionalText>}
  </InputContainer>
));
