import { Description, Illustration, Logo, Title, Wrapper } from './styles'

interface MainProps {
  title: string
  description: string
}

export function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}: MainProps) {
  return (
    <Wrapper>
      <Logo src="/img/logo.svg" alt="logo" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration src="/img/hero-illustration.svg" alt="hero" />
    </Wrapper>
  )
}
