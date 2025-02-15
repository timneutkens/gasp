import React from 'react'
import Page from '../components/page'
import Meta from '../components/meta'
import Intro from '../components/home/intro'
import Screen from '../components/screen'

export const config = { amp: true }

export default () => (
  <Page>
    <Meta />
    <Screen offset={128}>
      <Intro />
    </Screen>
  </Page>
)
