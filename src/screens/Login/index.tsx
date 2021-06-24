import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';

import ButtonIcon from '../../components/ButtonIcon';
import Background from '../../components/Background';

import { useAuth } from '../../hooks';

import illustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export default function Login() {
   const  { login, authLoading } = useAuth();
   
   async function handleSignIn() {
      try {
         await login();
      } catch(err) {
         const error = JSON.parse(err);
         
         Alert.alert('gameplayApp', error.message);
      }
   }

   return(
      <Background>
         <View style={styles.container}>
            <Image source={illustrationImg} style={styles.image} resizeMode="cover"/>

            <View style={styles.content}>
                  <Text style={styles.title}>
                     Conecte-se {'\n'} 
                     e organize suas {'\n'}
                     jogatinas
                  </Text>

                  <Text style={styles.subtitle}>
                     Crie grupos para jogar seus games {'\n'}
                     favoritos com seus amigos
                  </Text>

                  <View style={{ paddingHorizontal: 44 }}>

                     {
                        authLoading ? (
                           <View style={styles.fakeButton}>
                              <ActivityIndicator color={theme.colors.highlight} size="large" />
                           </View>
                        ) : (
                           <ButtonIcon 
                              text="Entrar com Discord" activeOpacity={0.7}
                              onPress={handleSignIn}
                           />
                        )
                     }
                     
                  </View>
                  
            </View>
         </View>
      </Background>
   );
}
