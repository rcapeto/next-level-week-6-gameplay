import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Profile from '../../components/Profile';
import CategoriesSelect from '../../components/CategoriesSelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import Background from '../../components/Background';
import Loading from '../../components/Loading';

import { Appointment as AppointmentProps } from '../../interface';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { styles } from './style';

export default function Home() {
   const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
   const [categorySelected, setCategorySelected] = useState<number>(0);
   const [appointmentsFiltered, setAppointmentsFiltered] = useState<AppointmentProps[]>([]);
   const [loading, setLoading] = useState(true);

   const navigation = useNavigation();

   useEffect(() => {
      if(!categorySelected) {
         setAppointmentsFiltered(appointments);
      } else {
         setAppointmentsFiltered(appointments.filter(appoint => appoint.category === categorySelected))
      }
   }, [categorySelected, appointments]);

   function handleCategorieSelect(category_id: number) {
      categorySelected === category_id ? setCategorySelected(0) : setCategorySelected(category_id);
   }

   function handleNavigate(data: AppointmentProps) {
      navigation.navigate('AppointmentDetails', { data });
   }

   async function getAppointments() {
      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

      if(storage) {
         setAppointments(JSON.parse(storage));
      }

      setLoading(false);
   }

   useFocusEffect(useCallback(() => {
      getAppointments();
   }, []));

   useEffect(() => {
      getAppointments();
   }, []);

   return(
      <Background>
         <View style={styles.container}>
            <View style={styles.header}>
               <Profile />
            </View>

            <View>
               <CategoriesSelect 
                  categorySelected={categorySelected} 
                  handleCategorieSelect={handleCategorieSelect}
               />

               <View style={styles.listHeader}>
                  <ListHeader title="Partidas Agendadas" subtitle={`${appointmentsFiltered.length}`}/>
               </View>
            </View>

            {
               loading ? (
                  <Loading />
               ) : (
                  <FlatList 
                     data={appointmentsFiltered}
                     keyExtractor={item => String(item.id)}
                     renderItem={({ item }) => (
                        <Appointment data={item} onPress={() => handleNavigate(item)} />
                     )}
                     contentContainerStyle={styles.listContainer}
                     showsVerticalScrollIndicator={false}
                  />
               )
            }
         </View>
      </Background>
   );
}