import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, FlatList, Alert, Share, Platform, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Background from '../../components/Background';
import Member from '../../components/Member';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import ButtonIcon from '../../components/ButtonIcon';
import Loading from '../../components/Loading';

import { Appointment, Player } from '../../interface';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';

import backgroundImage from '../../assets/banner.png';

interface RouteParams {
   data: Appointment;
}

export default function AppointmentDetails() {
   const [players, setPlayers] = useState<Player[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [invite, setInvite] = useState<string>('');

   const errorMessage = 'Verifique as configurações do servidor. Será que o Widget está habilitado?';

   const { primary } = theme.colors;

   const routes = useRoute();
   const params = routes.params as RouteParams;
   const appointment = params.data;

   async function getGuildPlayers() {
      try {
         const { data } = await api.get(`/guilds/${appointment.guild.id}/widget.json`);

         if(data.instant_invite) {
            setInvite(data.instant_invite);
         }

         const members = data.members.map((member: any) => {
            return {
               id: member.id,
               status: member.status,
               username: member.username,
               avatar: member.avatar_url
            }
         });

         setPlayers(members);

      } catch(err) {

         console.error({
            error: err,
            error_message: err.message,
            error_app: errorMessage
         });

         Alert.alert('Gameplay', errorMessage);

      } finally {
         setLoading(false);
      }
   }

   function handleShareInvite() {
      const joinUs = `Junte-se a ${appointment.guild.name}`;
      const textInvite = invite ? invite : joinUs ;
      const message = Platform.OS === 'ios' ? joinUs : textInvite;

      Share.share({
         message,
         url: invite,
         title: joinUs
      });
   }

   function handleJoinServer() {
      const link = invite ? invite : 'https://github.com/rcapeto';
      Linking.openURL(link);
   }

   useEffect(() => {
      getGuildPlayers();
   }, []);

   return(
      <Background>
         <Header 
            title="Detalhes"
            action={
               <BorderlessButton onPress={handleShareInvite}>
                  <Fontisto name="share" size={20} color={primary}/>
               </BorderlessButton>
            }
         />

         <ImageBackground 
            source={backgroundImage} 
            style={styles.banner} resizeMode="cover"
         >
            <View style={styles.info}>
               <Text style={styles.title}>{appointment.guild.name}</Text>
               <Text style={styles.description}>{appointment.description}</Text>
            </View>
         </ImageBackground>

         <ListHeader 
            title="Jogadores"
            subtitle={`${players.length}`}
         />

         {
            loading ? (
               <Loading />
            ) : (
               <FlatList 
                  data={players}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item }) => <Member data={item}/>}
                  contentContainerStyle={{ padding: 24 }}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={
                     <View style={styles.footer}>
                        <ButtonIcon text="Entar na partida" onPress={handleJoinServer}/>
                     </View>
                  }
               />
            )
         }
      </Background>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   banner: {
      width: '100%',
      height: 234,
      justifyContent: 'flex-end',
      marginBottom: 30
   },
   info: {
      padding: 24
   },
   title: {
      fontSize: 28,
      color: theme.colors.heading,
      fontFamily: theme.fonts.rajdhani700
   },
   description: {
      fontSize: 13,
      color: theme.colors.heading,
      fontFamily: theme.fonts.inter400,
      marginTop: 20
   },
   footer: {
      alignContent: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      marginBottom: getBottomSpace(),
      marginTop: 20
   }
});