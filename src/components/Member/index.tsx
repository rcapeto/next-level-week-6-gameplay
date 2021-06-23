import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import GuildIcon from '../GuildIcon';

import { Player } from '../../interface';

import { theme } from '../../global/styles/theme';

interface MemberProps extends RectButtonProps {
   data: Player;
}

export default function Member({ data, ...rest }: MemberProps) {
   const { avatar, username, status } = data;
   const isOnline = status === 'online';

   return(
      <RectButton style={styles.container} {...rest}>
         <GuildIcon uri={avatar}/>

         <View style={styles.content}>
            <Text style={styles.username}>{username}</Text>
            
            <View style={styles.status}>
               <View 
                  style={[
                     styles.ball,
                     isOnline ? styles.online : styles.offline
                  ]}
               />

               <Text style={styles.statusText}>
                  { isOnline ? 'Online' : 'Ocupado' }
               </Text>
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
      borderBottomWidth: 1,
      borderColor: theme.colors.highlight,
      paddingBottom: 10,
   },
   username: {
      fontFamily: theme.fonts.rajdhani700,
      fontSize: 18,
      color: theme.colors.heading,
      marginBottom: 5
   },
   status: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10
   },
   ball: {
      width: 10,
      height: 10,
      borderRadius: 10,
      marginRight: 3,
   },
   online: {
      backgroundColor: theme.colors.on
   },
   offline: {
      backgroundColor: theme.colors.primary
   },
   statusText: {
      marginLeft: 5,
      fontFamily: theme.fonts.inter400,
      fontSize: 13,
      color: theme.colors.heading
   }
});