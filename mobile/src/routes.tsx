import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home/home'
import Points from './pages/Points/points'
import Detail from './pages/Detail/detail'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#ffffff'
          }
        }}>
        <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
        <AppStack.Screen name="Points" component={Points}></AppStack.Screen>
        <AppStack.Screen name="Deitail" component={Detail}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;