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
} from '../components/hellofido'
import Gettouch from '../components/Gettouch'
import Startup from '../components/hellofido/Startup'
import { Helmet } from 'react-helmet'
class hellofido extends React.Component {
  render() {
    return (
    	<div className="body casestudy fido dark">
			<Layout>
				<Helmet>
					<title>Urbian | Hello Fido</title>
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

export default hellofido
