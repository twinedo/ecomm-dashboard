import { ButtonsContainer, ButtonsContent, Postfix, Prefix, Title } from "./buttons.styled";
import { TButtons } from "./buttons.type";

export const Buttons = (props: TButtons) => {
  const { prefix, postfix, children, title = 'Hit me' } = props;
  return (
      <ButtonsContainer {...props}>
        {prefix && <Prefix>{prefix}</Prefix>}
        <ButtonsContent>
          {title || typeof children === 'string' ? <Title>{title}</Title> : children}
        </ButtonsContent>
        {postfix && <Postfix>{postfix}</Postfix>}
      </ButtonsContainer>
  )
}