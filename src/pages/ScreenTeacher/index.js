import React from 'react';

import {
    ImageBackgroundComponent,
    Text,
    View
} from 'react-native';

import { styles } from './styles';

import BackgroundTeacher from '../../assets/BackgroundTeacher.svg';
import { Button } from '../../components/Button';

export const ScreenTeacher = () => {
    return (
        <View style={styles.container}>

            <View style={{ position: 'absolute', alignItems: 'center', marginTop: '32%', right: '17%' }}>
                <BackgroundTeacher />
            </View>


            <Text style={styles.txtHeader}> Quer ser {'\n'} um Proffy?</Text>

            <Text style={styles.txtAbout}> Para começar, você precisa {'\n'} se cadastrar como professor {'\n'} na nossa plataforma web.</Text>


            <View style={styles.areaButton}>
                <Button />
            </View>


        </View>
    );
}