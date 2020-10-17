import React from 'react';

import { StyleSheet, Text, View} from 'react-native';



import Click from '/Users/yuzhin/test-reactnative/click.js';

import ProductList from './src/product/ProductList.js';

import ProductAdd from './src/product/ProductAdd.js';

export default function App() {

  return (
  


    <View style={styles.container}>

      <Text>Hello</Text>

      <Click count={0}/>
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

