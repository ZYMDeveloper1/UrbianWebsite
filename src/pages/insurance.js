/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Casestudies,
  Articles,
} from '../components/insurance'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class insurance extends React.Component {
  render() {
    return (
      <div className="insurance body greybackground">
        <Layout>
          <Helmet>
            <title>Urbian | Insurance</title>
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

export default insurance
