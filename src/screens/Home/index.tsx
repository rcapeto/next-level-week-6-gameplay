import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Profile from '../../components/Profile';
import CategoriesSelect from '../../components/CategoriesSelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';

import { appointments } from '../../utils/appointments';

import { styles } from './style';

export default function Home() {
   const [categorySelected, setCategorySelected] = useState<number>(0);

   function handleCategorieSelect(category_id: number) {
      categorySelected === category_id ? setCategorySelected(0) : setCategorySelected(category_id);
   }

   return(
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
               <ListHeader title="Partidas Agendadas" subtitle="6"/>

               <FlatList 
                  data={appointments}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                     <Appointment data={item}/>
                  )}
                  contentContainerStyle={styles.listContainer}
                  showsVerticalScrollIndicator={false}
               />
            </View>
        </View>
      </View>
   );
}