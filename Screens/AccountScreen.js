import React from 'react';
import {View,Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
const AccountScreen = props => {
  return (
    <View style={tw.style('flex-1 items-center justify-center')}>
        <Text style={tw.style('text-lg')}>Account Screen ... </Text>
    </View>
  );
};

export default AccountScreen;
