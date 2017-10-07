// @flow
import styled from 'styled-components'

const unit = 10

const Spacer = styled.div`
  ${props => props['inline-block'] ? 'display: inline-block;' : ''}
  ${
    ({ top, bottom, left, right }) => {
      let css = ''
      if (top) css += `margin-top: ${unit * top}px;`
      if (bottom) css += `margin-bottom: ${unit * bottom}px;`
      if (left) css += `margin-left: ${unit * left}px;`
      if (right) css += `margin-right: ${unit * right}px;`
      return css
    }
  }
`
Spacer.displayName = 'Spacer'
export default Spacer
