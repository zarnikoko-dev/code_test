import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import CartSection from '../Components/CartSection';
import CheckoutSection from '../Components/CheckoutSection';
const CartScreen = props => {
  const cart = useSelector(state => state.cartReducer.cart);
  const rederCartListing = ({item}) => {
    return <CartSection product={item} />;
  };
  return (
    <>
      <FlatList
        data={cart}
        contentContainerStyle={{flexGrow: 0}}
        keyExtractor={item => item.id}
        renderItem={rederCartListing}
      />
      {cart.length > 0 && <CheckoutSection />}
    </>
  );
};

export default CartScreen;
