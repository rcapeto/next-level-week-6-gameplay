import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

interface ListProps {
   title: string;
   subtitle: string;
}

export default function ListHeader({ subtitle, title }: ListProps) {
   return(
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.subtitle}>Total {subtitle}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24
   },
   title: {
      fontFamily: theme.fonts.rajdhani700,
      color: theme.colors.heading,
      fontSize: 18
   },
   subtitle: {
      fontFamily: theme.fonts.inter400,
      color: theme.colors.highlight,
      fontSize: 13
   },
});