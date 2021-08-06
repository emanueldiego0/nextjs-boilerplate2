import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  background: string
  iconPosition: string
  outline: boolean
  outlineColor: string
}

interface IconContainerProps {
  children: ReactNode
}

interface TitleProps {
  color: string
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.background != undefined ? props.background : '#fff'};
  min-width: 100px;
  height: 40px;
  display: flex;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 0px;
  cursor: pointer;

  border-color: ${(props) =>
    props.outlineColor != undefined ? props.outlineColor : '#fff'};
  border-width: ${(props) => props.outline && '1px'};
  border-style: solid;
  filter: transition 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${(props) => (props.iconPosition == 'left' ? '10px' : 0)};
    margin-left: ${(props) => (props.iconPosition == 'right' ? '10px' : 0)};
  }
`

export const IconContainer = styled.div<IconContainerProps>``

export const Title = styled.p<TitleProps>`
  color: ${(props) => (props.color != undefined ? props.color : '#fff')}; ;
`
