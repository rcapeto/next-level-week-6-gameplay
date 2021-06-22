import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

interface BackgroundProps {
   children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
   return(
      <LinearGradient
         style={styles.container}
         colors={[theme.colors.secondary80, theme.colors.secondary100]}
      >
         { children }
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
});