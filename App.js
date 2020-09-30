import React from 'react';

import { StyleSheet, Text, View} from 'react-native';



import Click from '/Users/yuzhin/test-reactnative/click.js';

import ProductList from './src/product/ProductList.js';

export default function App() {

  return (
  


    <View style={styles.container}>

      <Text>Helloooooo</Text>

      <Click count={15}/>
      <ProductList/>
    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#ffffff',

    alignItems: 'center',

    justifyContent: 'center',

  },

});

