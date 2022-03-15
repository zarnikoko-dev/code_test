import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Section from '../Components/Section';
import tw from 'tailwind-react-native-classnames';
import {useSelector,useDispatch} from 'react-redux';
import ButtonBar from './ButtonBar';
import { toggleCOSuccessModal } from '../features/Modal/modalSlice';
import { emptyCart } from '../features/Cart/cartSlice';
const CheckoutSection = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const total = cart.reduce(
    (total, product) => product.list_price * product.count + total,
    0,
  );
  const checkout = () => {
    dispatch(emptyCart());
    dispatch(toggleCOSuccessModal());
  }
  return (
    <Section style={tw.style('p-4')}>
      <View style={tw.style('flex-row justify-between')}>
        <View>
          <Text style={tw.style('text-base font-bold')}>Total</Text>
        </View>
        <View>
          <Text style={tw.style('text-base font-bold')}>{total} KS</Text>
        </View>
      </View>
      <View style={tw.style('flex-row')}>
        <View style={tw.style('flex-1')}>
          <ButtonBar label="Checkout" style={tw.style('ml-0 mr-0')} onPress={checkout} />
        </View>
      </View>
    </Section>
  );
};

export default CheckoutSection;
