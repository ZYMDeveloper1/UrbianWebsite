/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'

import Readdetails from '../components/Read/disruptingthetraditionalconsultancymodel'
import Getintouchread from '../components/Read/Getintouchread'
import { Helmet } from 'react-helmet'
class readdetails extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian | Disrupting The Traditional Consultancy Model</title>
        </Helmet>
        <Readdetails></Readdetails>
        <Getintouchread></Getintouchread>
      </Layout>
    )
  }
}

export default readdetails
