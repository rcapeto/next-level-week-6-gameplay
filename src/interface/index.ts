import { ReactNode } from "react";

export interface Appointment {
   id: string,
   guild: {
      id: string,
      name: string,
      icon: null,
      owner: boolean
   },
   category: number,
   date: string,
   description: string,
   players: Player[]
}

export interface Player {
   id: number;
   username: string;
   avatar: string;
   status: 'online' | 'busy'
}

export interface Guild {
   id: string,
   name: string,
   icon: null | string,
   owner: boolean,
}

export interface ChildrenProps {
   children: ReactNode;
}

export interface User {
   id: string;
   username: string;
   firstName: string;
   avatar: string;
   email: string;
   token: string;
   verified: boolean;
}

export interface AuthContextProps {
   user: User | undefined;
   login: () => Promise<void>;
   authLoading: boolean;
   signed: boolean;
}

export interface AuthSessionResponse {
   params: {
      access_token: string;
      expires_in: string;
      token_type: string;
   };
}

export interface UserDiscordResponse {
   avatar: string,
   discriminator: string,
   email: string,
   flags: number,
   id: string,
   locale: string,
   mfa_enabled: boolean,
   public_flags: number,
   username: string,
   verified: boolean,
}