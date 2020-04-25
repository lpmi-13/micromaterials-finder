const axios = require('axios');

const REQUEST_URL = 'https://api.github.com/search/issues?q=label:micromaterial&sort=created&order=asc'

exports.createPages = async ({ actions: { createPage } }) => {
  // get all the micromaterials data from github
  const response = await axios.get(REQUEST_URL)
  // create a page that lists all the micromaterials
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-materials.js"),
    context: { allMaterials: response.data },
  })
}