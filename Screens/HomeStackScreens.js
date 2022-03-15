import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerMenu from '../Components/NavigationDrawerMenu';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './HomeScreen';
import ProductsListingScreen from './ProductsListingScreen';
import ProductDetailScreen from './ProductDetailScreen';
import SearchIcon from '../Components/SearchIcon';

const Stack = createStackNavigator();

const HomeStackScreens = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => ({
          title: 'One Stop Baby Center',
          headerTitleAlign: 'center',
          headerLeft: () => <NavigationDrawerMenu navigation={navigation} />,
          headerRight: () => <SearchIcon/>,
          headerTintColor: tw.color('gray-500'),
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="ProductsListing"
        component={ProductsListingScreen}
        options={({navigation, route}) => ({
          title: route.params.category_name,
          headerTitleAlign: 'center',
          headerRight: () => <SearchIcon/>,
          headerTintColor: tw.color('gray-500'),
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({navigation, route}) => ({
          title: route.params.product_name,
          headerTitleAlign: 'center',
          headerRight: () => <SearchIcon/>,
          headerTintColor: tw.color('gray-500'),
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreens;
