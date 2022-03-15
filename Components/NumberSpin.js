import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NumberSpin = (props) => { 
  const {decrease,number,increase} = props;
  return (
    <View
      style={tw.style(
        'flex-row w-32 bg-gray-200 rounded-3xl items-center p-2',
      )}>
      <TouchableOpacity style={[{width: '20%'}]} onPress={decrease}>
        <Text>
          <Icon name="minus" size={22} />
        </Text>
      </TouchableOpacity>
      <View style={tw.style('flex-1 items-center')}>
        <Text style={tw.style('font-bold text-base')}>{number}</Text>
      </View>
      <TouchableOpacity style={[{width: '20%'}]} onPress={increase}>
        <Text>
          <Icon name="plus" size={22} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberSpin;
