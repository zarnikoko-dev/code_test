import React  from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuCoverIcon: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    alignSelf: 'flex-start',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainter : {
    backgroundColor:"#0dcaf0",
    flexDirection:"row",
    padding:10,
    alignItems:'center'
  },
  logoText : {
    fontSize: 20,
    marginHorizontal:10,
    color: 'black',
    fontWeight:'bold'
  },
  versionText : {
    fontSize: 16,
    textAlign:'center',
  }
});

export default CustomSidebarMenu;