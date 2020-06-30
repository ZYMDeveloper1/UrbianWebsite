/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Casestudies,
  Articles,
} from '../components/pythonanddjangodevelopment'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class pythonanddjangodevelopment extends React.Component {
  render() {
    return (
      <div className="new-capabilities">
        <Layout>
          <Helmet>
            <title>Urbian | Python and Django development</title>
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

export default pythonanddjangodevelopment
