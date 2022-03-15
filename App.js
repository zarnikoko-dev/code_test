/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import BottomTabs from './Components/BottomTabs';
import CustomSidebarMenu from './Components/CustomSideBarMenu';
import {LogBox} from 'react-native';
import CheckOutSuccessModal from './Components/CheckOutSuccessModal';
export const Drawer = createDrawerNavigator();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
  "EventEmitter.removeListener('keyboardDidShow', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
  "EventEmitter.removeListener('keyboardDidHide', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
]);
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeTintColor: 'skyblue',
            itemStyle: {marginVertical: 5},
          }}
          // Here we are setting our custom sidebar menu
          drawerContent={props => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen name="Home" component={BottomTabs} />
        </Drawer.Navigator>
      </NavigationContainer>
      <CheckOutSuccessModal/>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
