import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  areaImage1: {
    width: '100%',
    height: '45%',
    backgroundColor: theme.colors.Purple,
    justifyContent: 'center',
    alignItems: 'center'
  },

  areaImage2: {
    width: '100%',
    height: '45%',
    backgroundColor: theme.colors.Green,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtNumber: {
    fontFamily: theme.fonts.PoppinsMedium,
    color: theme.colors.Base,
    fontSize: 40,
    opacity: 0.3,
    paddingHorizontal: 40,
    marginTop: 95
  },

  txtTitle: {
    fontFamily: theme.fonts.PoppinsMedium,
    fontSize: 24,
    color: theme.colors.Base,
    paddingHorizontal: 40,
    marginTop: 25,
    textAlign:'left'
  },

  areaFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 55
  },

  areaPlace: {
    width: 50,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  checkPurple: {
    width: 7,
    height: 7,
    backgroundColor: theme.colors.Purple,
    borderRadius: 3
  },

  checkGreen: {
    width: 7,
    height: 7,
    backgroundColor: theme.colors.Green,
    opacity: 0.4,
    borderRadius: 3
  },
  
  checkGray: {
    width: 7,
    height: 7,
    backgroundColor: theme.colors.Complements,
    opacity: 0.4,
    borderRadius: 3
  },
});