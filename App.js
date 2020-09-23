import React from 'react';

import { StyleSheet, Text, View} from 'react-native';



import Click from '/Users/yuzhin/test-reactnative/click.js';



export default function App() {

  return (

    <View style={styles.container}>

      <Text>Helloooooo</Text>

      <Click/>

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff111',

    alignItems: 'center',

    justifyContent: 'center',

  },

});

