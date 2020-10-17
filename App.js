
//加上另一個Screen

import * as React from 'react';

import { View, Text,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



function HomeScreen({navigation}) {//利用大括號的裡面去抓原本props裡面給的名稱變數

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>
<Button title = "good" onPress = { () => navigation.navigate('Details')}></Button>
    </View>

  );

}

function DetailsScreen(navigation) {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Details Screen</Text>

      </View>

    );

  }



const Stack = createStackNavigator();



function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home123" component={HomeScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



export default App;