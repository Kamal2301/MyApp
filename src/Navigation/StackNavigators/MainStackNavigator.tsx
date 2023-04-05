import React, {Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
import HomeScreen from '../../Screens/Home/HomeScreen';
import ProductViewScreen from '../../Screens/ProductView/ProductViewScreen';

export type MainStackParamList = {
  Home: any;
  ProductView: {productId: any};
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainStackNavigator() {
  return (
    <Fragment>
      <MainStack.Navigator
        screenOptions={{
          animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
          headerShown: false,
        }}>
        <MainStack.Group>
          <MainStack.Screen name={'Home'} component={HomeScreen} />
          <MainStack.Screen
            name={'ProductView'}
            component={ProductViewScreen}
          />
        </MainStack.Group>
      </MainStack.Navigator>
    </Fragment>
  );
}

export default MainStackNavigator;
