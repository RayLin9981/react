import React, { useState, useEffect } from 'react';
import { Alert, Button,TextInput } from 'react-native';
export default function Click(abc) {



  const [count, setCount] = useState(abc.count);
  const [desc,setDesc] = useState(abc.update);
  let countString = "count:" + count;



  function handleClick() {
    setCount(count + 1);

    Alert.alert("count:" + count);

  }
 /* function showCount() {

    Alert.alert("count:" + count);

  }
  useEffect(showCount);*/



  return (
<view>
    <Button title={countString} onPress={handleClick} />
    </view>
  );

}