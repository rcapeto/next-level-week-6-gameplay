import React from 'react';
import { View, StyleSheet, Text, ImageBackground, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Background from '../../components/Background';
import Member from '../../components/Member';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import ButtonIcon from '../../components/ButtonIcon';
import { Appointment } from '../../interface';

import { theme } from '../../global/styles/theme';

import backgroundImage from '../../assets/banner.png';

interface RouteParams {
   data: Appointment;
}

export default function AppointmentDetails() {
   const { primary } = theme.colors;

   const routes = useRoute();
   const params = routes.params as RouteParams;
   const appointment = params.data;

   return(
      <Background>
         <Header 
            title="Detalhes"
            action={
               <BorderlessButton>
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
            subtitle={`${appointment.players.length}`}
         />

         <FlatList 
            data={appointment.players}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Member data={item}/>}
            contentContainerStyle={{ padding: 24 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
               <View style={styles.footer}>
                  <ButtonIcon text="Entar na partida"/>
               </View>
            }
         />
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