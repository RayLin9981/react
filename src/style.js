import {StatusBar, StyleSheet} from 'react-native';



const styles = StyleSheet.create({

    container: {

      //backgroundColor: '#00bfff',

      flex: 1,

      //margin: 'auto',

      flexDirection: 'row',

      marginTop: StatusBar.currentHeight || 0,

    },

    item: {

      flex: 1,

      flexDirection: 'row',

      backgroundColor: '#66ffff',

      padding: 8,

      marginVertical: 8,

      marginHorizontal: 16,

      color :"#ff666f"

    },

    title: {
    flex : 10,
      fontSize: 16,
      textShadowColor: 'ffffff',
      color : "#ddd459"

    },

  

  });

export default styles;