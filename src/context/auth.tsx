import React, { createContext, useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ChildrenProps, AuthContextProps, User, AuthSessionResponse, UserDiscordResponse } from '../interface';
import { AUTH_URL, CDN_IMAGE } from '../configs/discordAuth';
import { api } from '../services/api';
import { COLLECTION_USERS } from '../configs/database';

type AuthSessionResponseComplete = AuthSession.AuthSessionResult & AuthSessionResponse;

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: ChildrenProps) {
   const [user, setUser] = useState<User>();
   const [authLoading, setAuthLoading] = useState<boolean>(false);

   useEffect(() => {
      checkIfHaveUser();
   }, []);

   async function checkIfHaveUser() {
      const storageData = await AsyncStorage.getItem(COLLECTION_USERS);
      
      if(storageData) {
         const userLogged = JSON.parse(storageData) as User;
         api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
         setUser(userLogged);
      }
   }

   async function login() {
      try {
         setAuthLoading(true);

         const { params, type } = await AuthSession.startAsync({ authUrl: AUTH_URL }) as AuthSessionResponseComplete;

         if(type === 'success') {
            api.defaults.headers.authorization = `${params.token_type} ${params.access_token}`;

            const response = await api.get('/users/@me');
            const data = response.data as UserDiscordResponse;

            const currentUser = {
               avatar: `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png`,
               email: data.email,
               firstName: data.username.split(' ')[0],
               id: data.id,
               token: params.access_token,
               username: data.username,
               verified: data.verified
            }

            await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(currentUser));
            setUser(currentUser);

         } else {
            const errorString = JSON.stringify({ message: `${type} is different than "success"`});
            throw new Error(errorString);
         }

      } catch(err) {
         const errorString = JSON.stringify({ error: err.message, message: 'Failed to sign in! =('});

         throw new Error(errorString);
      } finally {
         setAuthLoading(false);
      }
   }

   async function logout() {
      await AsyncStorage.removeItem(COLLECTION_USERS);
      setUser(undefined);
   }

   return(
      <AuthContext.Provider value={{ user, login, authLoading, signed: !!user, logout }}>
         { children }
      </AuthContext.Provider>
   );
}