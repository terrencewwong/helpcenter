// @flow
import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import StyleCascader from '../components/style-cascader'
import MainLayout from '../layouts/main'
import Article from '../components/article'
import { createClient } from '../plugins/contentful'

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
  }
`

const client = createClient()

type Props = {
  articles: Object[],
  categories: Object[]
}

export default class Index extends Component<Props> {
  static async getInitialProps () {
    const articleEntries = client.getEntries({
      'content_type': 'article'
    })

    let categories = client.getEntries({
      'content_type': 'categorySwitcher',
      include: 1
    })

    const articles = (await articleEntries).items
    categories = (await categories).items[0]

    return {
      articles,
      categories
    }
  }

  render () {
    const { articles, categories } = this.props
    return (
      <StyleCascader>
        <MainLayout categories={categories}>
          {
            articles.map(
              ({ fields }) => <Article {...fields} />
            )
          }
        </MainLayout>
      </StyleCascader>
    )
  }
}
