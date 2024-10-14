
import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';

const getFullName = (firstName: String, secondName: String,
thirdName: String) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat = () => {
  return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}
  !</Text>;
};

export default Cat;
