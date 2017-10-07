// @flow
import React from 'react'
import styled from 'styled-components'
import Text from './text'

const H2 = styled(Text.withComponent('h2')).attrs({
  size: 'size1'
})`
  margin: 15px 0 20px;
  font-weight: normal;
`
H2.displayName = 'H2'
export default H2
