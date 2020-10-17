import React from 'react';

import { StyleSheet, Text, View} from 'react-native';



import Click from '/Users/yuzhin/test-reactnative/click.js';

import ProductList from './src/product/ProductList.js';

import ProductAdd from './src/product/ProductAdd.js';
import ProductList_pra from './src/product/ProductList_pra.js';

export default function App() {

  return (
  


    <View style={styles.container}>

    <Text>Hello</Text>

      <Click count={0}/>
      <ProductList_pra></ProductList_pra>
      <ProductList/>
    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFC1E0',

    alignItems: 'center',

    justifyContent: 'center',

  },

});

