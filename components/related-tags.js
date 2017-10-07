// @flow
import React from 'react'
import styled from 'styled-components'
import Distribute from './distribute'
import Text from './text'
import A from './a'
import Spacer from './spacer'

const Flex = styled.div`
  display: flex;
`

type TagFields = {
  name: string,
  icon: {
    fields: {
      title: string,
      file: {
        url: string
      }
    }
  }
}

type Tag = {
  fields: TagFields
}

type Props = {
  tags: Tag[]
}

const Wrapper = styled(Distribute)`
  > .tag {
    :not(:last-child) {
      ::after {
        content: '+';
        margin-left: 15px;
        font-weight: 500;
      }
    }
  }
`

const TagComponent = ({ name, icon, className = ''}) => {
  return (
    <Distribute className={className} space={1}>
      <img alt={icon.fields.title} src={icon.fields.file.url} />
      <A inline size='sizen1' href='#'>{name}</A>
    </Distribute>
  )
}

const RelatedTags = ({ tags }: Props) => {
  const tagComponents = tags.map(({ fields }) => 
    <TagComponent className='tag' {...fields} />
  )

  return <Wrapper space={1.5}>
    <Text size='sizen1'>Related To:</Text>
    {tagComponents}
  </Wrapper>
}
RelatedTags.displayName = 'RelatedTags'
export default RelatedTags
