//@ flow
import React from 'react'
import styled from 'styled-components'
import Distribute from './distribute'
import Text from './text'
import A from './a'

const CascadeStyles = styled.div`
  color: #888;
`

type Props = {
  category: {
    fields: {
      name: string
    }
  },
  subcategory: {
    fields: {
      name: string
    }
  }
}

const CategoryTree = ({ category, subcategory }: Props) => (
  <CascadeStyles>
    <Distribute space={1} align='center'>
      <A href='#'>{category.fields.name}</A>
      <Text size='sizen2'>→</Text>
      <span>{subcategory.fields.name}</span>
    </Distribute>
  </CascadeStyles>
)
CategoryTree.displayName = 'CategoryTree'
export default CategoryTree
