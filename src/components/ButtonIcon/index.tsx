import React from 'react';
import { Image, View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = RectButtonProps  & {
   text: string;
}

export default function ButtonIcon({ text, ...rest }: ButtonIconProps) {
   return(
      <RectButton style={styles.container} {...rest}>
         <View style={styles.iconWrapper}>
            <Image 
               source={discordImg}
               style={styles.icon}
            />
         </View>

         <Text style={styles.buttonText}>{text}</Text>
      </RectButton>
   );
}