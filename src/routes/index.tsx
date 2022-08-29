import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DashboardScreen from '../screens/Dashboard';

const Stack = createStackNavigator();

const AppContainer = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={DashboardScreen}
          name="Dashboard"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
