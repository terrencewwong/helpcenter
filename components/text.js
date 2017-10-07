// @flow
import styled from 'styled-components'

const typography = {
  sizen2: `
    font-size: 12px;
    line-height: 12px;
  `,
  sizen1: `
    font-size: 14px;
    line-height: 30px;
  `,
  size0: `
    font-size: 16px;
    line-height: 30px;
  `,
  size1: `
    font-size: 18px;
    line-height: 30px;
  `,
  size2: `
    font-size: 24px;
    line-height: 30px;
  `
}

const Text = styled.div`
  ${props => props.inline ? 'display: inline;' : ''}
  ${props => typography[props.size]}
`
Text.displayName = 'Text'
export default Text
