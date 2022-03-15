import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const FloatingButton = props => {
  const {style, icon} = props;
  return (
    <TouchableOpacity
      style={[
        style,
        tw.style(
          'absolute bottom-5 right-8 w-14 h-14 rounded-full bg-yellow-600 items-center justify-center',
        ),
        {zIndex:100}
      ]}>
      <Text>{icon}</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
