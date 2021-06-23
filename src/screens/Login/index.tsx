import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonIcon from '../../components/ButtonIcon';
import Background from '../../components/Background';

import illustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export default function Login() {
   const navigation = useNavigation();

   function handleSignIn() {
      navigation.reset({
         routes: [{ name: 'Home'}]
      });
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
                     <ButtonIcon 
                        text="Entrar com Discord" activeOpacity={0.7}
                        onPress={handleSignIn}
                     />
                  </View>
                  
            </View>
         </View>
      </Background>
   );
}
