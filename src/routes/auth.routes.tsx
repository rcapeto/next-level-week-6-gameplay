import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import AppointmentDetails from '../screens/AppointMentDetails';
import AppointmentCreate from '../screens/AppointmentCreate';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
   return(
      <Navigator
         screenOptions={{
            headerShown: false,
            cardStyle: {
               backgroundColor: theme.colors.secondary100
            }
         }}
      >
         <Screen component={Login} name="Login" />
         <Screen component={Home} name="Home" />
         <Screen component={AppointmentDetails} name="AppointmentDetails" />
         <Screen component={AppointmentCreate} name="AppointmentCreate" />
      </Navigator>
   );
}