import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from 'tailwind-react-native-classnames';

const NavigationDrawerMenu = props => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.toggleDrawer();
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text>
          <Icon name="bars" size={24} color={tw.color('gray-500')} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default NavigationDrawerMenu;
