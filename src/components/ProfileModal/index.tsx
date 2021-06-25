import React from 'react';
import { Modal, ModalBaseProps, StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import Background from '../Background';

import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks';

interface ProfileModal extends ModalBaseProps {
   closeModal: () => void;
}

export default function ProfileModal({ closeModal, ...rest }: ProfileModal) {
   const { logout } = useAuth();

   async function handleLogout() {
      await logout();
      closeModal();
   }

   return(
      <Modal
         {...rest}
         animationType="fade"
         transparent
         statusBarTranslucent
      >
         <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.overlay}>
               <View style={styles.container}>
                  <Background>
                     <View style={styles.content}>
                        <Text style={styles.text}>
                           Deseja sair do Game<Text style={styles.red}>Play</Text>?
                        </Text>

                        <View style={styles.buttons}>
                           <TouchableOpacity style={[styles.button, styles.noBg]} onPress={closeModal}>
                              <Text style={styles.textButton}>Não</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.button} onPress={handleLogout}>
                              <Text style={styles.textButton}>Sim</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </Background>
               </View>
            </View>
         </TouchableWithoutFeedback>
      </Modal>
   );
}


const styles = StyleSheet.create({
   overlay: {
      flex: 1,
      backgroundColor: theme.colors.overlay,
      justifyContent: 'flex-end'
   },
   container: {
      height: 160
   },
   content: {
      padding: 24
   },
   text: {
      fontFamily: theme.fonts.rajdhani700,
      color: theme.colors.heading,
      fontSize: 20,
      textAlign: 'center'
   },
   red: {
      color: theme.colors.primary
   },
   buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30
   },
   button: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      padding: 17,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
   },
   noBg: {
      marginRight: 10,
      borderColor: theme.colors.heading,
      borderWidth: 1,
      backgroundColor: 'transparent'
   },
   textButton: {
      color: theme.colors.heading,
      fontFamily: theme.fonts.inter500,
      fontSize: 16
   }
});