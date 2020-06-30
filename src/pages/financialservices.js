/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Casestudies,
  Articles,
} from '../components/financialservices'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class financialservices extends React.Component {
  render() {
    return (
      <div className="financialservices">
        <Layout>
          <Helmet>
            <title>Urbian | Financial services</title>
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

export default financialservices
