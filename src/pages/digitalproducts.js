/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Contactus,
  Casestudies,
  Articles,
} from '../components/digitalproducts'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class digitalproducts extends React.Component {
  render() {
    return (
      <div className="digital-product body greybackground">
        <Layout>
          <Helmet>
            <title>Urbian | Digital products</title>
          </Helmet>
          <Topimage></Topimage>
          <Howdothis></Howdothis>
          <Whyurbian></Whyurbian>
          <Casestudies></Casestudies>
          <Articles></Articles>
          <Contactus></Contactus>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default digitalproducts
