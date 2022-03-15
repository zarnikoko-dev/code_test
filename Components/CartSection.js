import React, {useMemo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Section from '../Components/Section';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {removeFromCart, increase, decrease} from '../features/Cart/cartSlice';
import NumberSpin from '../Components/NumberSpin';
const CartSection = props => {
  const {product} = props;
  const dispatch = useDispatch();
  const productImage = useMemo(
    () => (
      <View style={tw.style('w-24 h-24 border border border-gray-300 rounded')}>
        <Image
          style={[{width: '100%', height: '100%'}]}
          source={{uri: product.url_link}}
          resizeMode={'cover'}
        />
      </View>
    ),
    [product.url_link],
  );
  const productNameandPricing = useMemo(
    () => (
      <>
        <View style={tw.style('flex-row justify-between items-start')}>
          <View style={{width: '80%'}}>
            <Text style={tw.style('text-base')}>{product.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(product.id))}>
            <Text>
              <Icon name="delete" size={30} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw.style('flex-row mt-2')}>
          <View>
            <Text style={tw.style('text-base font-bold')}>
              {product.list_price} KS
            </Text>
          </View>
        </View>
      </>
    ),
    [product.name, product.list_price, product.id],
  );
  const productCount = useMemo(
    () => (
      <NumberSpin
        number={product.count}
        increase={() => dispatch(increase(product.id))}
        decrease={() => dispatch(decrease(product.id))}
      />
    ),
    [product.count, product.id],
  );
  return (
    <Section style={tw.style('p-4')}>
      <View style={tw.style('flex-row')}>
        {productImage}
        <View style={tw.style('flex-1 h-full pl-2')}>
          {productNameandPricing}
          <View style={tw.style('flex-row justify-end')}>{productCount}</View>
        </View>
      </View>
    </Section>
  );
};

export default CartSection;
