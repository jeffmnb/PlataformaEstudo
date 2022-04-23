import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 343,
    height: 474,
    backgroundColor: theme.colors.darkWhite,
    borderRadius: 8,
    position: 'absolute'
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  areaProfile: {
    width: '100%',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    backgroundColor: theme.colors.white,
    borderRadius: 8
  },

  imageProfile: {
    width: 64,
    height: 64,
    borderRadius: 32
  },

  txtNameTeacher: {
    fontFamily: theme.fonts.ArchivoBold,
    fontSize: 20,
    color: theme.colors.Titles
  },

  txtMatter: {
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 12,
    color: theme.colors.Base
  },

  areaDescription: {
    paddingHorizontal: 30,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.Hover
  },

  txtDescription: {
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: 13,
    color: theme.colors.Base,
    marginTop:10,
    marginBottom:40
  },

  priceArea: {
    width:'100%',
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  txtTitlePrice:{
    fontFamily:theme.fonts.PoppinsRegular,
    color:theme.colors.Base,
    fontSize:14
  },

  txtPrice:{
    fontFamily:theme.fonts.ArchivoBold,
    fontSize:16,
    color:theme.colors.Purple,
    marginLeft:16
  },

  areaButtons:{
    width:'100%',
    height:70,
    marginTop:10,
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row'
  },

  likedButton:{
    width:60,
    height:60,
    backgroundColor:theme.colors.Red,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
  },

  notLikedButton:{
    width:60,
    height:60,
    backgroundColor:theme.colors.Purple,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
  },

  contactButton:{
    width:235,
    height:60,
    backgroundColor:theme.colors.Green,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },

  txtContact:{
    fontFamily:theme.fonts.ArchivoSemiBold,
    color:theme.colors.white,
    marginLeft:10,
    fontSize:16     
  }
});