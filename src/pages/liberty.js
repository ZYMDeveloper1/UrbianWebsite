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
} from '../components/liberty'
import Gettouch from '../components/Gettouch'
import Startup from '../components/liberty/Startup'
import { Helmet } from 'react-helmet'
class liberty extends React.Component {
  render() {
    return (
    <div className="body casestudy liberty dark">
      <Layout>
        <Helmet>
          <title>Urbian | Liberty Direct</title>
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

export default liberty
