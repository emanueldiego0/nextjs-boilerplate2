import { Container, Title } from './styles'
import { VscSaveAll } from 'react-icons/vsc'
import { ReactNode } from 'react'

interface ButtonProps {
  background: string
  contentColor: string
  title: string
  icon: ReactNode
  hasIcon: boolean
  iconPosition: string
  outline: boolean
}

export function Button({
  background,
  contentColor,
  title,
  hasIcon,
  iconPosition,
  outline
}: ButtonProps) {
  return (
    <Container
      background={background}
      iconPosition={iconPosition}
      outline={outline}
      outlineColor={contentColor}
    >
      {hasIcon && iconPosition === 'left' && (
        <div>
          <VscSaveAll color={contentColor} size={16} />
        </div>
      )}
      <Title color={contentColor}>{title}</Title>
      {hasIcon && iconPosition === 'right' && (
        <div>
          <VscSaveAll color={contentColor} size={16} />
        </div>
      )}
    </Container>
  )
}
