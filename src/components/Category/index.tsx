import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';


import { theme } from '../../global/styles/theme';

type CategoryProps = RectButtonProps & {
   identify: number;
   title: string;
   icon: React.FC<SvgProps>;
   checked?: boolean;
}

export default function Category({ icon: Icon, identify, title, checked,...rest }: CategoryProps) {
   return(
      <RectButton {...rest}>
         <LinearGradient 
            style={styles.container}
            colors={[theme.colors.secondary50, theme.colors.secondary70]}
         >
            <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
               <View style={checked ? styles.checked : styles.check} />
               <Icon width={48} height={48} />
               <Text style={styles.title}>{title}</Text>
            </View>
         </LinearGradient>
      </RectButton>
   );
}

const styles = StyleSheet.create({
   container: {
      width: 104,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginRight: 8
   },
   content: {
      width: 100,
      height: 116,
      backgroundColor: theme.colors.secondary40,
      borderRadius: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10
   },
   check: {
      width: 12,
      height: 12,
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.secondary100,
      marginRight: 7,
      borderColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 3

   },
   checked: {
      width: 12,
      height: 12,
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.primary,
      marginRight: 7,
      borderRadius: 3
   },
   title: {
      fontFamily: theme.fonts.inter500,
      color: theme.colors.heading,
      fontSize: 15
   }
});
