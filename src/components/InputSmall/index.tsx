import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

import { theme } from '../../global/styles/theme';

export default function InputSmall({ ...props}: TextInputProps) {
   return(
      <TextInput 
         style={styles.container}
         {...props}
         keyboardType="number-pad"
         returnKeyType="done"
         maxLength={2}
      />
   );
}

const styles = StyleSheet.create({
   container: {
      width: 48,
      height: 48,
      backgroundColor: theme.colors.secondary40,
      borderRadius: 8,
      fontFamily: theme.fonts.inter400,
      fontSize: 13,
      marginRight: 4,
      textAlign: 'center',
      color: theme.colors.heading
   }
});