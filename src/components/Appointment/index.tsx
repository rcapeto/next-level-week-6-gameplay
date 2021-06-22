import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import GuildIcon from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';

type AppointmentProps = RectButtonProps & {
   data: Appointment;
}

export interface Appointment {
   id: string;
   guild: GuildProps;
   category: number;
   date: string;
   description: string;
}

interface GuildProps {
   id: string;
   name: string;
   icon: null,
   owner: boolean;
}

export default function Appointment({ data, ...props }: AppointmentProps) {
   const [category] = categories.filter(category => category.identify === data.category);
   const { name, owner } = data.guild;

   return(
      <RectButton style={styles.container} {...props}>
         <GuildIcon />

         <View style={styles.content}>
            <View style={styles.header}>
               <Text style={styles.title}>
                  {name}
               </Text>

               <Text style={styles.category}>
                  {category.title}
               </Text>
            </View>

            <View style={styles.footer}>
               <View style={styles.dateInfo}>
                  <CalendarSvg />
                  <Text style={styles.date}>{data.date}</Text>
               </View>

               <View style={styles.playersInfo}>
                  <PlayerSvg fill={owner ? theme.colors.primary : theme.colors.on}/>
                  <Text 
                     style={[styles.playersInfoText, { 
                        color: owner ? theme.colors.primary : theme.colors.on
                     }]}>
                     { owner ? 'Anfitrião' : 'Visitante' }
                  </Text>
               </View>
            </View>
         </View>
      </RectButton>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20
   },
   content: {
      flex: 1,
   },
   header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
   },
   title: {
      fontFamily: theme.fonts.rajdhani700,
      color: theme.colors.heading,
      fontSize: 18
   },
   category: {
      fontFamily: theme.fonts.inter400,
      color: theme.colors.highlight,
      fontSize: 13,
   },
   footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.highlight,
      paddingBottom: 14
   },
   dateInfo: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   date: {
      marginLeft: 7,
      fontSize: 13,
      fontFamily: theme.fonts.inter500,
      color: theme.colors.heading
   },
   playersInfo: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   playersInfoText: {
      marginLeft: 7,
      fontFamily: theme.fonts.inter500,
      fontSize: 13
   },
});