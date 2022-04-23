import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import {useNavigation} from '@react-navigation/native';

import ImageMain from '../../assets/ImageMain.svg';
import IconButtonBook from '../../assets/IconButtonBook.svg';
import IconButtonBoard from '../../assets/IconButtonBoard.svg';
import IconHeart from '../../assets/IconHeart.svg';

export const Main = () => {

  const navigation  = useNavigation();

  return (
    <View style={styles.container}>

      <View style={{ width: '100%', alignItems: 'center', marginTop: 80 }}>
        <ImageMain />
      </View>

      <View style={{ width: '100%', paddingHorizontal: 40 }}>


        <Text style={styles.txtWelcome}> Seja bem-vindo. {'\n'} <Text style={styles.txtToDo}>O que deseja fazer?</Text></Text>


        <View style={styles.areaButtons}>

          <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('ScreenStudent')}>
            <IconButtonBook />
            <Text style={styles.txtButton}>Estudar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate('ScreenTeacher')}>
            <IconButtonBoard />
            <Text style={styles.txtButton}>Dar aulas</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.txtFooter}>Total de 285 conexões {'\n'} já realizadas<Text> </Text><IconHeart /></Text>

      </View>

    </View>
  );
}