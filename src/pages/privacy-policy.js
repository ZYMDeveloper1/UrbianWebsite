/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import {
  Policy,
} from '../components/privacy-policy'
import { Helmet } from 'react-helmet'
class privacypolicy extends React.Component {
  render() {
    return (
      <div className="privacy-policy body greybackground">
        <Layout>
          <Helmet>
            <title>Urbian | Privacy policy</title>
          </Helmet>
          <Policy></Policy>
        </Layout>
      </div>
    )
  }
}

export default privacypolicy
