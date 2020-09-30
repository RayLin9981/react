import React, {useState} from 'react';

import {FlatList, View, Text, StatusBar,StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../style.js';





const data =[

  {name:"iPhone 7", price:12000},

  {name:"iPhone 8", price:10000},

  {name:"iPhone X", price:20000},

]



export default function ProductList() {

  

  const [selected, setSelected] = useState(null);

  

  const renderItem = ({ item, index }) => {

    const backgroundColor = index === selected ? "#f9c2ff" : "#ffffff";

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.name}</Text>

      <Text  style= {styles.item}>{item.price}</Text>

      <Text style={styles.item}>/{index}</Text>

    </TouchableOpacity>

    )

  };





 return (

   <View style={styles.container}>

   <FlatList 

    data={data} 

    renderItem = {renderItem}

    keyExtractor={item => item.name}

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