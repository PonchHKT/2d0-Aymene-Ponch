import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginDashboard} from './assets/components/login';
import {register} from './assets/components/register';
import {todolist} from './assets/components/todolist';
import profil from './assets/components/profil'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>
        <Stack.Screen name="login" component={LoginDashboard} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="todolist" component={todolist} />
        <Stack.Screen name="profil" component={profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
