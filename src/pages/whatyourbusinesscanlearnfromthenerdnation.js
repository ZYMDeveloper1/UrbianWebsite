/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'

import Readdetails from '../components/Read/whatyourbusinesscanlearnfromthenerdnation'
import Getintouchread from '../components/Read/Getintouchread'
import { Helmet } from 'react-helmet'
class readdetails extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian | What Your Business Can Learn from the #NerdNation</title>
        </Helmet>
        <Readdetails></Readdetails>
        <Getintouchread></Getintouchread>
      </Layout>
    )
  }
}

export default readdetails
