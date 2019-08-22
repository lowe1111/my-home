import React from 'react'
import Layout from '../components/layout'

import * as SC from '../styles/pages.sc'
import Header from '../components/header/Header';
import Tabs from '../components/tabs/Tabs';

const DevPage = () => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.InfoStarter>
          <Header />
          <Tabs color={'#ba7200'} />
          <SC.TextSection>
            <div>
              Hello
            </div>
         </SC.TextSection>
        </SC.InfoStarter>
      </SC.Wrapper>
    </Layout>
  )
}

export default DevPage
