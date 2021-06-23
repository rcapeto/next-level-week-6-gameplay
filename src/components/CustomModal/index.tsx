import React, { ReactNode } from 'react';
import { StyleSheet, Modal, ModalProps, View, TouchableOpacity } from 'react-native';

import Background from '../Background';

import { theme } from '../../global/styles/theme';

type CustomModalProps = ModalProps & {
   children: ReactNode;
   closeModal: () => void;
}

export default function CustomModal({ children, closeModal ,...props}: CustomModalProps) {
   return(
      <Modal
         {...props}
         transparent
         animationType="fade"
      >
         <View style={styles.overlay}>
            <View style={styles.container}>
               <Background>
                  <TouchableOpacity onPress={closeModal} style={{ height: 30 }}>
                     <View style={styles.bar}/>
                  </TouchableOpacity>
                  { children }
               </Background>
            </View>
         </View>

      </Modal>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 100
   },
   overlay: {
      backgroundColor: theme.colors.overlay,
      flex: 1
   },
   bar: {
      width: 39,
      height: 2,
      borderRadius: 2,
      backgroundColor: theme.colors.secondary30,
      alignSelf: 'center',
      marginTop: 13
   }
});

