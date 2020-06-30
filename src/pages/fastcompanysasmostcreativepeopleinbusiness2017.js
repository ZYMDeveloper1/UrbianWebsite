/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'

import Readdetails from '../components/Read/fastcompanysasmostcreativepeopleinbusiness2017'
import Getintouchread from '../components/Read/Getintouchread'
import { Helmet } from 'react-helmet'
class readdetails extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian | Fast Company SA’s Most Creative People in Business 2017</title>
        </Helmet>
        <Readdetails></Readdetails>
        <Getintouchread></Getintouchread>
      </Layout>
    )
  }
}

export default readdetails
