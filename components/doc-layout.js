// @flow
import * as React from 'react'
import styled from 'styled-components'

const sizes = {
  large: '1020px'
}

const Centerer = styled.div`
  display: flex;
  justify-content: center;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${props => sizes[props.size] || props.size};
`

type Props = {
  children?: React.Node,
  size: string
}

const DocLayout = ({ children, size }: Props) => {
  return (
    <Centerer>
      <ContentContainer size={size}>
        {children}
      </ContentContainer>
    </Centerer>
  )
}

export default DocLayout
