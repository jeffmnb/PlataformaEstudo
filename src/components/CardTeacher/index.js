import React, { useState } from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import theme from '../../styles/theme';

import IconWhatsApp from '../../assets/IconWhatsApp.svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CardTeacher = () => {

    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.areaProfile}>
                <Image source={{ uri: 'https://github.com/jeffmnb.png' }} style={styles.imageProfile} />

                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.txtNameTeacher}>Jeferson Borda</Text>
                    <Text>Química</Text>
                </View>

            </View>

            <View style={styles.areaDescription}>

                <Text style={styles.txtDescription}>Entusiasta das melhores tecnologias de química avançada. {'\n'} {'\n'}

                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</Text>

            </View>

            <View style={styles.priceArea}>
                <Text style={styles.txtTitlePrice}>Preço/hora</Text>
                <Text style={styles.txtPrice}>R$ 20,00</Text>
            </View>


            <View style={styles.areaButtons}>
                <TouchableOpacity style={[liked ? styles.likedButton : styles.notLikedButton]} onPress={() => setLiked(oldValue => !oldValue)}>
                    {
                        liked

                            ? <MaterialCommunityIcons name="heart-broken-outline" size={30} color={theme.colors.white} />

                            : <Ionicons name="heart-outline" size={30} color={theme.colors.white} />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactButton}>
                    <IconWhatsApp />
                    <Text style={styles.txtContact}>Entrar em contato</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}