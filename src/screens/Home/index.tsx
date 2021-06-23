import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Profile from '../../components/Profile';
import CategoriesSelect from '../../components/CategoriesSelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import Background from '../../components/Background';

import { appointments } from '../../utils/appointments';
import { Appointment as AppointmentProps } from '../../interface';

import { styles } from './style';

export default function Home() {
   const [categorySelected, setCategorySelected] = useState<number>(0);
   const [appointmentsFiltered, setAppointmentsFiltered] = useState<AppointmentProps[]>([]);

   const navigation = useNavigation();

   useEffect(() => {
      if(!categorySelected) {
         setAppointmentsFiltered(appointments);
      } else {
         setAppointmentsFiltered(appointments.filter(appoint => appoint.category === categorySelected))
      }
   }, [categorySelected]);

   function handleCategorieSelect(category_id: number) {
      categorySelected === category_id ? setCategorySelected(0) : setCategorySelected(category_id);
   }

   function handleNavigate(data: AppointmentProps) {
      navigation.navigate('AppointmentDetails', { data });
   }

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

               <View style={styles.content}>
                  <ListHeader title="Partidas Agendadas" subtitle={`${appointmentsFiltered.length}`}/>

                  <FlatList 
                     data={appointmentsFiltered}
                     keyExtractor={item => item.id}
                     renderItem={({ item }) => (
                        <Appointment data={item} onPress={() => handleNavigate(item)} />
                     )}
                     contentContainerStyle={styles.listContainer}
                     showsVerticalScrollIndicator={false}
                     contentInset={{ bottom: 100 }}
                  />
               </View>
            </View>
         </View>
      </Background>
   );
}