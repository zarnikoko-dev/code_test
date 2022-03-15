import React from 'react';
import {View, TouchableOpacity, Text,Dimensions} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ButtonBar = props => {
  const {label, style , onPress} = props;
  return (
    <TouchableOpacity
      style={[
        {height:60},
        tw.style(
          'bg-yellow-600 rounded-2xl items-center justify-center m-3',
        ),
        style,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
      >
      <Text style={tw.style('text-white text-lg')}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBar;
