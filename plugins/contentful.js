const contentful = require('contentful')
const defaultConfig = require('../.contentful.json')

module.exports = {
  createClient (config = defaultConfig) {
    return contentful.createClient({
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CDA_ACCESS_TOKEN,
      host: 'preview.contentful.com'
    })
  }
}
