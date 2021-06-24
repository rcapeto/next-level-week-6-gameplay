import React, { createContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import { ChildrenProps, AuthContextProps, User, AuthSessionResponse, UserDiscordResponse } from '../interface';
import { AUTH_URL, CDN_IMAGE } from '../configs/discordAuth';
import { api } from '../services/api';

type AuthSessionResponseComplete = AuthSession.AuthSessionResult & AuthSessionResponse;

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: ChildrenProps) {
   const [user, setUser] = useState<User>();
   const [authLoading, setAuthLoading] = useState<boolean>(false);

   async function login() {
      try {
         setAuthLoading(true);

         const { params, type } = await AuthSession.startAsync({ authUrl: AUTH_URL }) as AuthSessionResponseComplete;

         if(type === 'success') {
            api.defaults.headers.authorization = `${params.token_type} ${params.access_token}`;

            const response = await api.get('/users/@me');
            const data = response.data as UserDiscordResponse;

            setUser({
               avatar: `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png`,
               email: data.email,
               firstName: data.username.split(' ')[0],
               id: data.id,
               token: params.access_token,
               username: data.username,
               verified: data.verified
            });

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

   return(
      <AuthContext.Provider value={{ user, login, authLoading, signed: !!user }}>
         { children }
      </AuthContext.Provider>
   );
}