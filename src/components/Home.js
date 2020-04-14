import React from 'react';

import Layout from './Layout';
import MicromaterialsList from './MicromaterialsList';
import '../styles/home.scss';

const Home = () => {

  return (
    <Layout>
      <h1 className="welcome-text">
        These are the micromaterials
      </h1>
      <MicromaterialsList />
    </Layout>
  )
}

export default Home;