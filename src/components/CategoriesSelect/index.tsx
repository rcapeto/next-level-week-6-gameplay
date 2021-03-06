import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Category from '../Category';
import { categories } from '../../utils/categories';

type CategoriesSelectProps = {
   categorySelected: number;
   handleCategorieSelect: (id: number) => void;
   hasCheckBox?: boolean;
}

export default function CategoriesSelect({ categorySelected, handleCategorieSelect, hasCheckBox = false }: CategoriesSelectProps) {
   return(
     <ScrollView 
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ paddingRight: 40 }}
     >
        {
           categories.map(category => (
            <Category 
               {...category} 
               key={category.identify} 
               checked={category.identify === categorySelected}
               onPress={() => handleCategorieSelect(category.identify)}
               hasCheckBox={hasCheckBox}
            />
           ))
        }
     </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      minHeight: 120,
      maxHeight: 120,
      paddingLeft: 24
   }
});
