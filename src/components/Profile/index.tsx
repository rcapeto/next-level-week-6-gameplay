import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks';

import ProfileModal from '../ProfileModal';

import { theme } from '../../global/styles/theme';

export default function Profile() {
   const [showModal, setShowModal] = useState<boolean>(true);

   const navigation = useNavigation();
   const { user } = useAuth();

   function handleNavigate() {
      navigation.navigate('AppointmentCreate');
   }

   function toggleModal() {
      setShowModal(!showModal);
   }

   return(
      <View style={styles.container}>
         <View style={styles.user}>
            <RectButton onPress={toggleModal}>
               <Image 
                  style={styles.image}
                  source={{ uri: user?.avatar }}
                  resizeMode="contain"
               />
            </RectButton>
            <View style={styles.text}>
               <Text style={styles.textHello}>
                  Olá, <Text style={styles.name}>{user?.firstName}</Text>
               </Text>

               <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
         </View>


         <RectButton style={styles.button} onPress={handleNavigate}>
            <AntDesign name="plus" size={20} color={theme.colors.heading}/>
         </RectButton>

         <ProfileModal visible={showModal} closeModal={toggleModal}/>
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