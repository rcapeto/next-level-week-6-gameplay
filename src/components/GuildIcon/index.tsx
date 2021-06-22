import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export default function GuildIcon() {
   const uri = 'https://c0.klipartz.com/pngpicture/842/992/gratis-png-discord-ordenadores-servidores-teamspeak-discord-icon-thumbnail.png'

   return(
      <Image 
         source={{ uri }}
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