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
} from '../components/STSC'
import Gettouch from '../components/Gettouch'
import Startup from '../components/STSC/Startup'
import { Helmet } from 'react-helmet'
class STSC extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian | STSC</title>
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
    )
  }
}

export default STSC
