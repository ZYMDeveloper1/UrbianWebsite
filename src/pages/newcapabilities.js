/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Talentpool,
  Contactus,
  Casestudies,
  Articles,
} from '../components/newcapabilities'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class newcapabilities extends React.Component {
  render() {
    return (
      <div className="new-capabilities body greybackground">
        <Layout>
          <Helmet>
            <title>Urbian | New capabilities</title>
          </Helmet>
          <Topimage></Topimage>
          <Whyurbian></Whyurbian>
          <Talentpool></Talentpool>
          <Howdothis></Howdothis>
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

export default newcapabilities
