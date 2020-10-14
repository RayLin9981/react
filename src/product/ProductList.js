import React, {useState} from 'react';

import {FlatList, View, Text, StatusBar,StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../style.js';
import ProductAdd from './ProductAdd.js';
import { add } from 'react-native-reanimated';





const data =[

  {desc:"iPhone 7", price:12000},

  {desc:"iPhone 8", price:10000},

  {desc:"iPhone X", price:20000},

]



export default function ProductList() {

  

  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState([...data,

    {desc:"iPad", price:20000},

    {desc:"iPhone X", price:30000}

    ]);
  

  const renderItem = (props) => {
    const item = props.item;
    const index = props.index;
    //const { item, index } = props
    const backgroundColor = index === selected ? "#f9c2ff" : "#ffffff";

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.desc}</Text>

      <Text  style= {styles.item}>{item.price}</Text>

      <Text style={styles.item}>/{index}</Text>

    </TouchableOpacity>

    )

  };


  function update1(newProduct){
    //第一種寫法，先將function定義好再呼叫setProducts
  /*  function a (a){
      return [...a, newProduct]
    }setProducts(a)
    */
    setProducts(function(oldProducts){
      console.log("[...oldProudct,newProduct]",[oldProducts,newProduct])
      console.log("oldProducts",oldProducts)
            return [...oldProducts, newProduct]
    })
//    setProducts(oldProducts => [...oldProducts, newProduct]);
   // setProducts([...products,newProduct]); 
  
  }


 return (

   <View style={styles.container}>
<ProductAdd update={update1}/>
   <FlatList 

    data={products} 
    renderItem = {renderItem}

    keyExtractor={item => item.desc}

    >
   </FlatList>

   </View>

 );

}



/*const styles = StyleSheet.create({

  container: {

    backgroundColor: '#ffffff',

    flex: 1,

    flexDirection: 'row',

    marginTop: StatusBar.currentHeight || 0,

  },

  item: {

    flex: 1,

    flexDirection: 'row',

    backgroundColor: '#00ffff',

    padding: 8,

    marginVertical: 8,

    marginHorizontal: 16,

  },

  title: {

    fontSize: 24,

  },

})*/;