/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Projectdescription,
  Outcomes,
  Contentwrap,
  Demoday,
  Recognition,
  Getintouch,
} from '../components/hi5'
import Gettouch from '../components/Gettouch'
import Startup from '../components/hi5/Startup'
import { Helmet } from 'react-helmet'
class hiSaaS extends React.Component {
  render() {
    return (
      <div className="body casestudy hifive">
        <Layout>
          <Helmet>
            <title>Urbian | Hi5</title>
          </Helmet>
          <Topimage></Topimage>
          <Projectdescription></Projectdescription>
          <Outcomes></Outcomes>
          <Contentwrap></Contentwrap>
          <Startup></Startup>
          <Demoday></Demoday>
          <Recognition></Recognition>
          <Getintouch></Getintouch>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default hiSaaS
