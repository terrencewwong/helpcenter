// @flow
import React from 'react'
import styled from 'styled-components'
import MDReactComponent from 'markdown-react-js'
import Spacer from './spacer'
import CategoryTree from './category-tree'
import RelatedTags from './related-tags'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import P from './p'
import Strong from './strong'
import Ol from './ol'
import Ul from './ul'
import Img from './img'

const unit = 10

const Container = styled.div`
  max-width: ${props => props.maxWidth || '100%'};
  ${
    ({ top, bottom, left, right }) => {
      let css = ''
      if (top) css += `padding-top: ${unit * top}px;`
      if (bottom) css += `padding-bottom: ${unit * bottom}px;`
      if (left) css += `padding-left: ${unit * left}px;`
      if (right) css += `padding-right: ${unit * right}px;`
      return css
    }
  }
  ${
    props => props.bordered
      ? 'border-top: 1px solid #dfe1e2; border-bottom: 1px solid #dfe1e2;'
      : ''
  }
`

const iterator = (Tag, props, children) => {
  switch (Tag) {
    case 'h2':
      return <H2 {...props}>{children}</H2>
    case 'h3':
      return <H3 {...props}>{children}</H3>
    case 'p':
      return <P {...props}>{children}</P>
    case 'strong':
      return <Strong {...props}>{children}</Strong>
    case 'ol':
      return <Ol {...props}>{children}</Ol>
    case 'ul':
      return <Ul {...props}>{children}</Ul>
    case 'img':
      return <Img {...props} />
    default:
      return <Tag {...props}>{children}</Tag>
  }
}

type Props = {
  title: string,
  content: string,
  tags: Object[],
  category: Object,
  subcategory: Object
}

export default ({ title, content, tags, category, subcategory }: Props) => {
  return <Container maxWidth='740px' left={2} right={2}>
    <Container top={3} bottom={1.5} bordered>
      <CategoryTree category={category} subcategory={subcategory} />
      <Spacer top={1.2}>
        <H1>{title}</H1>
      </Spacer>
      <Spacer top={3.5}>
        <RelatedTags tags={tags} />
      </Spacer>
    </Container>
    <MDReactComponent text={content} onIterate={iterator} />
  </Container>
}
