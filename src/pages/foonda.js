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
} from '../components/foonda'
import Gettouch from '../components/Gettouch'
import Startup from '../components/foonda/Startup'
import { Helmet } from 'react-helmet'
class foonda extends React.Component {
  render() {
    return (
    <div className="body casestudy foonda">
      <Layout>
        <Helmet>
          <title>Urbian | Foonda</title>
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

export default foonda
