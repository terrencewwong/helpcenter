// @flow
import React from 'react'
import styled from 'styled-components'
import Distribute from './distribute'

type Category = {
  fields: {
    name: string,
    icon: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
}

type Props = {
  categories: Category[]
}

const CategoryButtonWrapper = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #d8d7d7;
  cursor: pointer;

  :hover {
    background-color: hsla(0,0%,86%,.09);
  }
`

const CategoryButton = ({ fields }: Category) => (
  <CategoryButtonWrapper>
    <img src={fields.icon.fields.file.url} width='40px' height='40px' />
  </CategoryButtonWrapper>
)

export default ({ categories }: Props) => {
  console.log(categories)
  return <Distribute space={1}>
    {
      categories.map(({ fields })=> <CategoryButton fields={fields} />)
    }
  </Distribute>
}
