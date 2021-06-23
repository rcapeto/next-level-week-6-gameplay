import { Player } from '../interface'; 

const players: Player[] = [
   {
      id: 1,
      username: 'Raphael Capeto',
      avatar: 'https://github.com/rcapeto.png',
      status: 'online',
   },
   {
      id: 2,
      username: 'Diego Fernandes',
      avatar: 'https://github.com/diego3g.png',
      status: 'busy',
   },
   {
      id: 3,
      username: 'Gabriel Cintra',
      avatar: 'https://github.com/gblcintra.png',
      status: 'online',
   },
   {
      id: 4,
      username: 'Raphael Capeto',
      avatar: 'https://github.com/rcapeto.png',
      status: 'online',
   },
   {
      id: 5,
      username: 'Diego Fernandes',
      avatar: 'https://github.com/diego3g.png',
      status: 'busy',
   },
   {
      id: 6,
      username: 'Gabriel Cintra',
      avatar: 'https://github.com/gblcintra.png',
      status: 'online',
   },
   {
      id: 7,
      username: 'Raphael Capeto',
      avatar: 'https://github.com/rcapeto.png',
      status: 'online',
   },
   {
      id: 8,
      username: 'Diego Fernandes',
      avatar: 'https://github.com/diego3g.png',
      status: 'busy',
   },
   {
      id: 9,
      username: 'Gabriel Cintra',
      avatar: 'https://github.com/gblcintra.png',
      status: 'online',
   }
];

export const appointments = [
   {
      id: '1',
      guild: {
         id: '1',
         name: 'Lendários',
         icon: null,
         owner: true
      },
      category: 1,
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10',
      players
   },
   {
      id: '2',
      guild: {
         id: '2',
         name: 'Teste',
         icon: null,
         owner: false
      },
      category: 2,
      date: '20/02 às 10:40h',
      description: 'Vamo que vamo!',
      players
   },
   {
      id: '3',
      guild: {
         id: '2',
         name: 'Teste',
         icon: null,
         owner: false
      },
      category: 2,
      date: '20/02 às 10:40h',
      description: 'Vamo que vamo!',
      players
   },
];

