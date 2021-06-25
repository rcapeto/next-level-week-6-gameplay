import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks';

import Login from '../screens/Login';

import AppRoutes from './app.routes';

export default function Routes() {
   const { signed } = useAuth();

   return(
      <NavigationContainer>
         {
            signed ? <AppRoutes /> :  <Login />
         }
      </NavigationContainer>
   );
}