import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import CartScreen from './CartScreen';
import {HeaderBackButton} from '@react-navigation/stack';
import SearchIcon from '../Components/SearchIcon';
const Stack = createStackNavigator();

const CartStackScreens = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({navigation, route}) => ({
          title: 'Shopping Cart',
          headerTitleAlign: 'center',
          headerTintColor: tw.color('gray-500'),
          headerLeft: () => <HeaderBackButton onPress={()=>navigation.goBack()}/>,
          headerRight: () => <SearchIcon/>,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default CartStackScreens;
