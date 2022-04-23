import React, { useCallback, useState } from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import { styles } from './styles';

import ImageArrowRight from '../../assets/ArrowRightSvg.svg';
import ImageBook from '../../assets/ImageBook.svg';
import ImageBoard from '../../assets/ImageBoard.svg';

import theme from '../../styles/theme';

export const Welcome = () => {

    useFocusEffect(useCallback(() => {

        setPage(1);
        
        }, []))

    const navigation = useNavigation();

    const [page, setPage] = useState(1);

    return (
        <View style={styles.container}>

            <View style={[page == 1 ? styles.areaImage1 : styles.areaImage2]}>

                {
                    page == 1
                        ? <ImageBook />
                        : <ImageBoard />
                }

            </View>

            <Text style={styles.txtNumber}>{page == 1 ? '01.' : '02.'}</Text>

            <Text style={styles.txtTitle}>{page == 1 ? 'Encontre vários professores para ensinar você' : ` Ou dê aulas ${'\n'} sobre o que você ${'\n'} mais conhece`}</Text>

            <View style={styles.areaFooter}>
                <View style={styles.areaPlace}>
                    <View style={[page == 1 ? styles.checkPurple : styles.checkGray, page == 2 ? styles.checkGray : styles.checkPurple]} />
                    <View style={[page == 2 ? styles.checkGreen : styles.checkGray, page == 1 ? styles.checkGray : styles.checkGreen]} />
                </View>

                <TouchableOpacity onPress={ page > 2 ? navigation.navigate('Main') : () => setPage(oldValue => oldValue + 1)}>
                    <ImageArrowRight />
                </TouchableOpacity>


            </View>
        </View>
    );
}





