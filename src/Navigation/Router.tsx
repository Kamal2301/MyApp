import {NavigationContainer} from '@react-navigation/native';
import React, {Fragment} from 'react';
import MainStackNavigator from './StackNavigators/MainStackNavigator';

function Router() {
  return (
    <Fragment>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Fragment>
  );
}

export default Router;
