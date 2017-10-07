// @flow
import React from 'react'
import styled from 'styled-components'
import DocLayout from '../components/doc-layout'
import CategorySwitcher from '../components/category-switcher'

const Background = styled.div`
  background: #eef5f6;
`

export default ({ children, categories }) => {
  return (
    <div>
      <Background>
        <DocLayout size='large'>
        <CategorySwitcher categories={categories.fields.categories} />
        </DocLayout>
      </Background>
      <DocLayout size='large'>
        {children}
      </DocLayout>
    </div>
  )
}
