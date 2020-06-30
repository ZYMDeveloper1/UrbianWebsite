/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Casestudies,
  Articles,
} from '../components/saas'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class saas extends React.Component {
  render() {
    return (
      <div className="saas">
        <Layout>
          <Helmet>
            <title>Urbian | SaaS</title>
          </Helmet>
          <Topimage></Topimage>
          <Whyurbian></Whyurbian>
          <Howdothis></Howdothis>
          <Casestudies></Casestudies>
          <Articles></Articles>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default saas
