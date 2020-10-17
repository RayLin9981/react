import React, { useState, useEffect } from 'react';
import { Alert, Button,TextInput,View } from 'react-native';
export default function Click(props) {



  const [count, setCount] = useState(props.count);
  let countString = "count:" + count;

const handleClick = () => {
   setCount(count+1);
}
function showCount() {
  Alert.alert("count:" + count);
  }
  useEffect(showCount);
  return (
    <View>
          <Button title={countString} onPress={handleClick} />

    </View>
  );

}