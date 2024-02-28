import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignupScreen from '../container/signup/SignupScreen';
import { RootStackParamList } from './type/NavigatorType';
import DetailsScreen from '../container/details/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigatorContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorContainer;
