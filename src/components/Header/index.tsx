import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';

type HeaderProps = {
   title: string;
   action?: ReactNode;
}

export default function Header({ title, action }: HeaderProps) {
   const { secondary100, secondary40, heading } = theme.colors;

   const navigation = useNavigation();
   
   return(
      <LinearGradient
         colors={[secondary100, secondary40]}
         style={styles.container}
      >
         <BorderlessButton onPress={navigation.goBack}>
            <Feather name="arrow-left" size={24} color={heading}/>
         </BorderlessButton>

         <Text style={styles.title}>{title}</Text>

         {
            action && (
               <View>
                  { action }
               </View>
            )
         }

      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: 104,
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: getStatusBarHeight(),
      paddingHorizontal: 24,
      justifyContent: 'space-between'
   },
   title: {
      flex: 1,
      textAlign: 'center',
      fontFamily: theme.fonts.rajdhani700,
      fontSize: 20,
      color: theme.colors.heading
   }
});