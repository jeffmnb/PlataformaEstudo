import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:theme.colors.Background
    },

    header: {
        width: '100%',
        height: '40%',
        backgroundColor: theme.colors.Purple,
        paddingHorizontal: 30
    },

    txtHeader: {
        fontFamily: theme.fonts.ArchivoBold,
        fontSize: 24,
        color: theme.colors.white,
        marginTop: 35
    }
});