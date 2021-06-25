import React, { useState } from 'react';
import { 
   View, 
   StyleSheet, 
   Text, 
   TextInput, 
   ScrollView, 
   KeyboardAvoidingView, 
   Platform,
   Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import CategoriesSelect from '../../components/CategoriesSelect';
import GuildIcon from '../../components/GuildIcon';
import InputSmall from '../../components/InputSmall';
import ButtonIcon from '../../components/ButtonIcon';
import Guilds from '../../components/Guilds';
import CustomModal from '../../components/CustomModal';

import { theme } from '../../global/styles/theme';
import { Guild } from '../../interface';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export default function AppointmentCreate() {
   const [day, setDay] = useState<string>('');
   const [month, setMonth] = useState<string>('');
   const [hour, setHour] = useState<string>('');
   const [minute, setMinute] = useState<string>('');
   const [categorySelected, setCategorySelected] = useState<number>(0);
   const [description, setDescription] = useState<string>('');
   const [showModal, setShowModal] = useState<boolean>(false);
   const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null);

   const navigation = useNavigation();

   function handleCategorieSelect(category_id: number) {
      categorySelected === category_id ? setCategorySelected(0) : setCategorySelected(category_id);
   }

   function toggleModal() {
      setShowModal(!showModal);
   }

   function handleSelectGuild(guild: Guild) {
      setSelectedGuild(guild);
   }

   async function handleSave() {

      if(
         !day.trim() ||
         !month.trim() ||
         !hour.trim() ||
         !minute.trim() ||
         !selectedGuild || 
         !categorySelected
      ) {
         Alert.alert('Gameplay', 'Por favor preencha os campos obrigatórios:\n\nDia, Mês, Hora, Minuto, Categoria e Servidor');
         return;
      }

      const newAppointment = {
         id: String(Date.now()),
         guild: selectedGuild,
         category: categorySelected,
         date: `${day}/${month} às ${hour}/${minute}h`,
         description,
      }

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));

      navigation.navigate('Home');
   }

   return(
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
         <Background>
            <Header title="Agendar partida"/>
               <ScrollView style={styles.container}>
                  <Text style={[styles.label, { padding: 24}]}>Categoria</Text>

                  <CategoriesSelect 
                     hasCheckBox
                     handleCategorieSelect={handleCategorieSelect}
                     categorySelected={categorySelected}
                  />

                  <View style={styles.form}>
                     <RectButton
                        onPress={toggleModal}
                     >
                        <View style={styles.select}>
                           {
                              selectedGuild ? 
                                 <GuildIcon 
                                    uri={selectedGuild.icon ? selectedGuild.icon : ''}
                                 />
                              :
                              <View style={styles.noImage}/>
                           }

                           <View style={styles.selectBody}>
                              <Text style={styles.label}>
                                 {
                                    selectedGuild ? selectedGuild.name : 'Selecione um servidor'
                                 }
                              </Text>
                           </View>

                           <Feather 
                              name="chevron-right"
                              color={theme.colors.heading}
                              size={18}
                           />
                        </View>
                     </RectButton>

                     <View style={styles.fields}>
                        <View style={styles.field}>
                           <Text style={styles.label}>Dia e mês</Text>

                           <View style={styles.inputs}>
                              <InputSmall value={day} onChangeText={setDay}/>
                              <Text style={styles.inputSeparator}>/</Text>
                              <InputSmall value={month} onChangeText={setMonth}/>
                           </View>
                        </View>

                        <View style={styles.field}>
                           <Text style={styles.label}>Hora e minuto</Text>
                           <View style={styles.inputs}>
                              <InputSmall value={hour} onChangeText={setHour}/>
                              <Text style={styles.inputSeparator}>:</Text>
                              <InputSmall value={minute} onChangeText={setMinute}/>
                           </View>
                        </View>
                     </View>
                  </View>

                  <View style={styles.description}>
                     <View style={styles.descriptionHeader}>
                        <Text style={styles.label}>Descrição</Text>
                        <Text style={styles.max}>Max 100 caracteres</Text>
                     </View>

                     <TextInput 
                        style={styles.textarea}
                        value={description}
                        onChangeText={setDescription}
                        returnKeyType="done"
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                        multiline
                        textAlignVertical="top"

                     />
                  </View>

                  <View style={styles.button}>
                     <ButtonIcon 
                        text="Agendar" 
                        noIcon 
                        onPress={handleSave}
                     />
                  </View>
               </ScrollView>

            <CustomModal 
               animationType="fade" 
               visible={showModal} 
               closeModal={toggleModal}
            >
               <Guilds 
                  handleSelectGuild={handleSelectGuild}
                  closeModal={toggleModal}
                  selectedGuild={selectedGuild}
               />
            </CustomModal>
         </Background>
      </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   label: {
      fontSize: 18,
      fontFamily: theme.fonts.rajdhani700,
      color: theme.colors.heading,
   },
   form: {
      paddingHorizontal: 24,
      marginTop: 32,
   },
   select: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      height: 68,
      borderColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 8,
      paddingRight: 25,
      overflow: 'hidden'
   },
   noImage: {
      width: 64,
      height: 68,
      backgroundColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 8,
      borderLeftWidth: 0
   },
   selectBody: {
      flex: 1,
      alignItems: 'center'
   },
   fields: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 28
   },
   field: {

   },
   inputs: {
      flexDirection: 'row',
      marginTop: 12,
      alignItems: 'center',
   },
   inputSeparator: {
      color: theme.colors.highlight,
      fontFamily: theme.fonts.inter500,
      fontSize: 15,
      marginHorizontal: 4
   },
   description: {
      marginTop: 28,
      paddingHorizontal: 24
   },
   descriptionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
   },
   max: {
      fontFamily: theme.fonts.inter500,
      fontSize: 12,
      color: theme.colors.highlight,
   },
   textarea: {
      width: '100%',
      minHeight: 100,
      backgroundColor: theme.colors.secondary40,
      borderRadius: 8,
      fontFamily: theme.fonts.inter400,
      fontSize: 13,
      marginRight: 4,
      color: theme.colors.heading,
      padding: 15
   },
   button: {
      paddingHorizontal: 24,
      marginVertical: 20,
      marginBottom: 56
   }
});