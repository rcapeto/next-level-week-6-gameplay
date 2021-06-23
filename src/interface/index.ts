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