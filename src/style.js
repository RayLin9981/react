import {StatusBar, StyleSheet} from 'react-native';



const styles = StyleSheet.create({

    container: {

      //backgroundColor: '#00bfff',

      flex: 1,

      //margin: 'auto',

      flexDirection: 'column',

      marginTop: StatusBar.currentHeight || 0,

    },

    item: {

      flex: 10,

      flexDirection: 'row',

      backgroundColor: '#f6ffff',

      padding: 20,

      marginVertical: 8,

      marginHorizontal: 16,

      color :"#ff666f"

    },

    title: {
    flex : 10,
      fontSize: 20,
      textShadowColor: '#ffffff',
      color : "#ddd459"

    },
    Addbutton: {
      flexDirection:'row',


    },
  pra_button:{
    flexDirection:'row',
    backgroundColor : 'red'

  },
});

export default styles;