/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Contactus,
  Howdothis,
  Casestudies,
  Articles,
} from '../components/remoteadvisory'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class remoteadvisory extends React.Component {
  render() {
    return (
      <div className="remote-advisory body greybackground">
        <Layout>
          <Helmet>
            <title>Urbian | Remote advisory</title>
          </Helmet>
          <Topimage></Topimage>
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

export default remoteadvisory
