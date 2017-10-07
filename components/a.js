// @flow
import styled from 'styled-components'
import Text from './text'

const A = styled(Text.withComponent('a'))`
  color: #8bcbca;
  text-decoration: none;
`
A.displayName = 'A'
export default A
