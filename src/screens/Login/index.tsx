import React from 'react';
import { Text, View, Image } from 'react-native';

import ButtonIcon from '../../components/ButtonIcon';

import illustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export default function Login() {
   return(
      <View style={styles.container}>
        <Image source={illustrationImg} style={styles.image} resizeMode="cover"/>

        <View style={styles.content}>
            <Text style={styles.title}>
               Organize {'\n'} 
               suas jogatinas {'\n'}
               facilmente
            </Text>

            <Text style={styles.subtitle}>
               Crie grupos para jogar seus games {'\n'}
               favoritos com seus amigos
            </Text>

            <ButtonIcon text="Entrar com Discord" activeOpacity={0.7}/>
        </View>
      </View>
   );
}
