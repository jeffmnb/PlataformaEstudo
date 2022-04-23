import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Purple,
  },

  txtWelcome: {
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 20,
    color: theme.colors.white,
    marginTop: 88,
    lineHeight: 35
  },

  txtToDo: {
    fontFamily: theme.fonts.PoppinsSemiBold,
    fontSize: 20,
    color: theme.colors.white,
  },

  areaButtons: {
    width: '100%',
    height: 170,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  button1: {
    width: 140,
    height: 160,
    backgroundColor: theme.colors.AnotherPurple,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button2: {
    width: 140,
    height: 160,
    backgroundColor: theme.colors.Green,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtButton: {
    fontFamily: theme.fonts.ArchivoBold,
    fontSize: 20,
    color: theme.colors.white,
    marginTop: '15%'
  },

  txtFooter: {
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 12,
    color: theme.colors.white,
    opacity: 0.5,
    marginTop:40,
    lineHeight:23,
    marginRight:5
  }
});