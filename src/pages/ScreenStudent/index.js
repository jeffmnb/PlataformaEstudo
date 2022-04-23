import React from 'react';

import {
    View,
    Image,
    Text
} from 'react-native';

import { styles } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

import IconProffy from '../../assets/IconProffy.svg';
import theme from '../../styles/theme';
import { CardTeacher } from '../../components/CardTeacher';

import {useNavigation} from '@react-navigation/native';


export const ScreenStudent = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{
                    justifyContent: 'space-between',
                    paddingTop: '18%',
                    flexDirection: 'row',
                }}>
                    <MaterialIcons name="keyboard-arrow-left" size={29} color={theme.colors.white} onPress={()=> navigation.goBack()}/>
                    <IconProffy />
                </View>

                <Text style={styles.txtHeader}> Meus proffys {'\n'} Favoritos</Text>

            </View>

            <View style={{ position:'absolute', top:'35%', width: '100%', alignItems: 'center' }}>
                <CardTeacher />
            </View>


        </View>
    );
}