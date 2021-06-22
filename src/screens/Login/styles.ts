import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   image: {
      width: '100%',
      height: 360
   },
   content: {
      marginTop: -40,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      color: theme.colors.heading,
      textAlign: 'center',
      fontSize: 40,
      marginBottom: 16,
      fontFamily: theme.fonts.rajdhani700
   },
   subtitle: {
      color: theme.colors.heading,
      textAlign: 'center',
      fontSize: 15,
      marginBottom: 64,
      lineHeight: 25,
      fontFamily: theme.fonts.inter400
   }
});