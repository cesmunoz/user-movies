import React from 'react'
import Page from 'components/Page'
import FieldSelectorContainer from '../containers/FieldSelectorContainer'
import CardListContainer from '../containers/CardListContainer'


const MainPage = () => (
  <Page title="You are watching our users' movies preferences...">
    <FieldSelectorContainer />
    <CardListContainer />
  </Page>
)

export default MainPage
