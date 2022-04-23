import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 294,
        height: 56,
        backgroundColor: theme.colors.Green,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtButton: {
        fontFamily: theme.fonts.ArchivoSemiBold,
        fontSize: 16,
        color: theme.colors.white
    }
});