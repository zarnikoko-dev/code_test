import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import HomeStackScreens from '../Screens/HomeStackScreens';
import {useSelector, useDispatch} from 'react-redux';
import CartStackScreens from '../Screens/CartStackScreens';
import AccountScreen from '../Screens/AccountScreen';
const Tab = createBottomTabNavigator();

const  BottomTabs = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  const total_count = cart.reduce((total,product)=>(product.count)+total,0);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeStackScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartStackScreens}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <FAIcon name="shopping-basket" color={color} size={size} />
          ),
          tabBarBadge: total_count>0?total_count:null,
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs