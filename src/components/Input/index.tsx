import { InputContainer, InputField, OptionalText } from "./styles";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input: React.FC<InputProps> = props => (
  <InputContainer>
    <InputField {...props} />
    {!props.required && <OptionalText>Opcional</OptionalText>}
  </InputContainer>
);
