import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Restaurant, OrderDelivery } from './src/screens';
import Tabs from './src/navigation/tab';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}
        initialRouteName={"Home"}>
        <stack.Screen name="Home" component={Tabs} />
        <stack.Screen name="Restaurant" component={Restaurant} />
        <stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;