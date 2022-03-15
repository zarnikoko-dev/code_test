import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart/cartSlice';
const ProductsSection = props => {
  const {product_list, navigation} = props;
  const dispatch = useDispatch();
  const renderProductListing = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.item, tw.style('border rounded-xl')]}
        onPress={() => {
          navigation.navigate('ProductDetail', {
            product_id: item.product_id,
            product_name: item.name,
          });
        }}>
        <View
          style={[
            tw.style('items-center justify-center bg-red-100'),
            {height: '70%'},
          ]}>
          <View
            style={[
              tw.style(
                'absolute top-0 right-0 pt-1 pb-1 pl-2 pr-2 bg-yellow-600 rounded-lg',
              ),
              {zIndex: 50},
            ]}>
            <Text style={tw.style('text-white text-sm')}>20%</Text>
          </View>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: item.product_image}}
            resizeMode={'cover'}
          />
        </View>
        <View style={[{height: '15%'}, tw.style('pl-3 pr-3')]}>
          <Text style={[tw.style('font-bold')]}>{item.name}</Text>
        </View>
        <View style={[{height: '5%'}, tw.style('pl-3 pr-3')]}>
          <Text style={[{textDecorationLine: 'line-through'}]}>
            {item.list_price * 0.2 + item.list_price} KS
          </Text>
        </View>
        <View
          style={[
            {height: '10%'},
            tw.style('flex-row justify-between pl-3 pr-3'),
          ]}>
          <Text style={tw.style('font-bold text-base')}>
            {item.list_price} KS
          </Text>
          <TouchableOpacity onPress={()=>dispatch(addToCart(item))}>
            <Text style={tw.style('font-bold')}>
              <Icon
                name="shopping-basket"
                color={tw.color('yellow-500')}
                size={tw.style('text-2xl').fontSize}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={product_list}
      contentContainerStyle={[
        {paddingLeft: Dimensions.get('window').width * 0.033},
        {paddingBottom: 10},
        {paddingTop: 5},
      ]}
      numColumns={2}
      keyExtractor={item => item.product_id}
      renderItem={renderProductListing}
    />
  );
};

var styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.8,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    marginRight: Dimensions.get('window').width * 0.033,
    marginVertical: Dimensions.get('window').width * 0.016,
  },
});

export default ProductsSection;
