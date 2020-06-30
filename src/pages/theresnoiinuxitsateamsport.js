/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'

import Readdetails from '../components/Read/theresnoiinuxitsateamsport'
import Getintouchread from '../components/Read/Getintouchread'
import { Helmet } from 'react-helmet'
class readdetails extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian | There’s no ‘i’ in UX, It’s a Team Sport</title>
        </Helmet>
        <Readdetails></Readdetails>
        <Getintouchread></Getintouchread>
      </Layout>
    )
  }
}

export default readdetails
