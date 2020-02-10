/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'containers/NavBar/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Table" defaultTitle="Table">
        <meta name="description" content="A Table" />
      </Helmet>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
