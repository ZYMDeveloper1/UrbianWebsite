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
} from '../components/wineconnected'
import Gettouch from '../components/Gettouch'
import Startup from '../components/wineconnected/Startup'
import { Helmet } from 'react-helmet'
class wineconnected extends React.Component {
  render() {
    return (
    	<div className="body casestudy wineconnected dark">
			<Layout>
				<Helmet>
					<title>Urbian | Wine Connected</title>
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

export default wineconnected
