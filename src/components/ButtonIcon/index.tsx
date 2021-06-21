import React from 'react';
import { Image, View, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = TouchableOpacityProps  & {
   text: string;
}

export default function ButtonIcon({ text, ...rest }: ButtonIconProps) {
   return(
      <TouchableOpacity style={styles.container} {...rest}>
         <View style={styles.iconWrapper}>
            <Image 
               source={discordImg}
               style={styles.icon}
            />
         </View>

         <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
   );
}