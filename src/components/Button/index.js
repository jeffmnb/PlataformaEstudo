import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './styles';

export const Button = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.txtButton}>Tudo bem !</Text>
        </TouchableOpacity>
    );
}