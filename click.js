import React, { useState, useEffect } from 'react';
import { Alert, Button } from 'react-native';
export default function Click(abc) {



  const [count, setCount] = useState(abc.count);

  let countString = "count:" + count;



  function handleClick() {

    setCount(count + 1);

    Alert.alert("count:" + count);

  }
  function showCount() {

    Alert.alert("count:" + count);

  }
  useEffect(showCount);



  return (

    <Button title={countString} onPress={handleClick} />

  );

}