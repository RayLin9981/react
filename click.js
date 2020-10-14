import React, { useState, useEffect } from 'react';
import { Alert, Button,TextInput } from 'react-native';
export default function Click(props) {



  const [count, setCount] = useState(props.count);
  let countString = "count:" + count;

const handleClick = () => {setCount(count+1);}

 /* function handleClick() {
    setCount(count + 1);

    Alert.alert("count:" + count);

  }*/
  
 /* function showCount() {

    Alert.alert("count:" + count);

  }
  useEffect(showCount);*/

 // useEffect();

  return (
<view>
    <Button title={countString} onPress={handleClick} />
    </view>
  );

}