import React from 'react';

import Layout from '../components/layout';
import MicromaterialUrlItem from '../components/MicromaterialUrlItem';
import SEO from '../components/seo';

export default ({ pageContext: { allMaterials } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Micromaterials</h1>
    <p>{allMaterials.total_count} micromaterials so far...</p>
    <ul className="pr-list">
       {allMaterials.items.map(item => (
         <MicromaterialUrlItem key={item.html_url} description={item.description} url={item.html_url} />
       ))}
    </ul>
  </Layout>
)