import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import GuildIcon from '../GuildIcon';

import { Guild } from '../../interface';
import { guilds } from '../../utils/servers';
import { theme } from '../../global/styles/theme';

export interface GuildItemProps extends TouchableOpacityProps{
   data: Guild;
   handleSelectGuild: (guild: Guild) => void;
   closeModal?: () => void;
   selectedGuild: Guild | null;
}

export type GuildsProps = {
   handleSelectGuild: (guild: Guild) => void;
   closeModal?: () => void;
   selectedGuild: Guild | null;
}

export default function Guilds({ handleSelectGuild, closeModal, selectedGuild }: GuildsProps) {
   return(
      <View style={styles.container}>
         <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <GuildItem 
                  data={item}
                  handleSelectGuild={handleSelectGuild}
                  closeModal={closeModal}
                  selectedGuild={selectedGuild}
               />
            )}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
            contentContainerStyle={{ paddingBottom: 25, paddingTop: 30 }}
         />
      </View>
   );
}

function GuildItem({ data, handleSelectGuild, closeModal, selectedGuild,...props}: GuildItemProps) {
   const { icon, id, name, owner } = data;

   const sameGuild = selectedGuild && selectedGuild.id == id;

   const currentIcon = icon ? icon: '';

   function handleSelect() {
      handleSelectGuild(data);
      closeModal && closeModal();
   }

   return(
      <TouchableOpacity {...props} style={styles.guildItemContainer} onPress={handleSelect}>

         <View style={[styles.controlOpacity, sameGuild && { opacity: 0.6 }]}>
            <GuildIcon uri={currentIcon}/>

            <View style={styles.content}>
               <View>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.owner}>
                     { owner ? 'Administrador': 'Convidado'}
                  </Text>
               </View>
            </View>

            <Feather 
               name="chevron-right"
               color={theme.colors.heading}
               size={24}
            />
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 24
   },
   guilds: {
      width: '100%',
      paddingVertical: 24
   },
   guildItemContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
   },
   controlOpacity: {
      flexDirection: 'row'
   },
   content: {
      flex: 1,
      justifyContent: 'center',
   },
   name: {
      fontFamily: theme.fonts.rajdhani700,
      color: theme.colors.heading,
      fontSize: 18,
      marginBottom: 11
   },
   owner: {
      fontFamily: theme.fonts.inter400,
      color: theme.colors.highlight,
      fontSize: 13,
      marginBottom: 24
   }
});

