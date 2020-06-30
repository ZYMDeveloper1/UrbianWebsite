/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  ProjectMedia,
  Projectdescription,
  Outcomes,
  Contentwrap,
  Demoday,
  Recognition,
  Getintouch,
} from '../components/babylonstoren'
import Gettouch from '../components/Gettouch'
import Startup from '../components/babylonstoren/Startup'
import { Helmet } from 'react-helmet'
class babylonstoren extends React.Component {
  render() {
    return (
    <div className="body casestudy babylonstoren dark">
      <Layout>
        <Helmet>
          <title>Urbian | Babylonstoren</title>
        </Helmet>
        <Topimage></Topimage>
        <ProjectMedia></ProjectMedia>
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

export default babylonstoren
