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
} from '../components/standardbank'
import Gettouch from '../components/Gettouch'
import Startup from '../components/standardbank/Startup'
import { Helmet } from 'react-helmet'
class standardbank extends React.Component {
  render() {
    return (
    <div className="body casestudy standardbank dark">
      <Layout>
        <Helmet>
          <title>Urbian | Sanlam Private Wealth</title>
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

export default standardbank
