// @flow
import React from 'react'
import styled from 'styled-components'
import Text from './text'

const H1 = styled(Text.withComponent('h1')).attrs({
  size: 'size2'
})`
  font-weight: normal;
`
H1.displayName = 'H1'
export default H1
