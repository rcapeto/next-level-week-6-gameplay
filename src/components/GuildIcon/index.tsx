import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

interface GuildIconProps {
   uri?: string;
}

export default function GuildIcon({ uri = '' }: GuildIconProps) {
   const uriDefault = 'https://c0.klipartz.com/pngpicture/842/992/gratis-png-discord-ordenadores-servidores-teamspeak-discord-icon-thumbnail.png'

   return(
      <Image 
         source={{ uri: !uri ? uriDefault : uri }}
         style={styles.image}
         resizeMode="cover"
      />
   );
}

const styles = StyleSheet.create({
   image: {
      width: 64,
      height: 64,
      borderRadius: 8,
      marginRight: 20
   },
});