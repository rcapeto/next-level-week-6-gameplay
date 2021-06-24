import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks';

import Login from '../screens/Login';

import AuthRoutes from './auth.routes';

export default function Routes() {
   const { signed } = useAuth();

   return(
      <NavigationContainer>
         {
            signed ? <AuthRoutes /> :  <Login />
         }
      </NavigationContainer>
   );
}