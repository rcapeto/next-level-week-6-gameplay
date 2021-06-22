import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

export default function Profile() {
   return(
      <View style={styles.container}>
         <View style={styles.user}>
            <Image 
               style={styles.image}
               source={{ uri: 'https://github.com/rcapeto.png '}}
               resizeMode="contain"
            />

            <View style={styles.text}>
               <Text style={styles.textHello}>
                  Olá, <Text style={styles.name}>Raphael</Text>
               </Text>

               <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
         </View>


         <RectButton style={styles.button}>
            <AntDesign name="plus" size={20} color={theme.colors.heading}/>
         </RectButton>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   image: {
      width: 48,
      height: 48,
      marginRight: 20,
      borderRadius: 8
   },

   user: {
      flexDirection: 'row',
      alignItems: 'center'
   },

   text: {
      alignItems: 'center'
   },

   textHello: {
      fontFamily: theme.fonts.rajdhani500,
      color: '#fff',
      fontSize: 24,
   },

   name: {
      fontFamily: theme.fonts.rajdhani700
   },

   message: {
      fontFamily: theme.fonts.inter400,
      color: theme.colors.highlight,
      fontSize: 13,
      marginTop: 3
   },

   button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      width: 48,
      height: 48,
      borderRadius: 8
   }
});