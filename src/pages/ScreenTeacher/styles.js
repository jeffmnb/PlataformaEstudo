import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Purple,
  },

  txtHeader: {
    fontFamily: theme.fonts.ArchivoBold,
    fontSize: 35,
    color: theme.colors.white,
    paddingHorizontal: 35,
    marginTop: '65%'
  },

  txtAbout: {
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 16,
    paddingHorizontal: 40,
    color: theme.colors.white,
    opacity: 0.5,
    marginTop: 24,
    lineHeight: 27
  },

  areaButton: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '55%'
  }
});