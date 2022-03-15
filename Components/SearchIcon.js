import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';

const SearchIcon = props => {
  const {
    style,
    size = 24,
    color = tw.color('gray-700'),
    action,
  } = props;
  return (
    <TouchableOpacity
      style={[tw.style('mr-2'),style]}
      onPress={action}
      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
      <Text allowFontScaling={false}>
        <Icon name={'search1'} size={size} color={color} />
      </Text>
    </TouchableOpacity>
  );
};

export default SearchIcon;
