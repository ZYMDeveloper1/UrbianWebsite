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
} from '../components/investec'
import Gettouch from '../components/Gettouch'
import Startup from '../components/investec/Startup'
import { Helmet } from 'react-helmet'
class investec extends React.Component {
  render() {
    return (
    <div className="body casestudy investec dark">
      <Layout>
        <Helmet>
          <title>Urbian | Investec</title>
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

export default investec
