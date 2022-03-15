import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import ProductBanner from '../Components/ProductBanner';
import Section from '../Components/Section';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonBar from '../Components/ButtonBar';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../features/Cart/cartSlice';
import {showToast} from '../Common/methods';

const ProductDetailScreen = props => {
  const cart = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();
  const {route} = props;
  const {product_id} = route.params;
  const [productDetail, setProductDetail] = useState([]);
  const fetchingProductDetail = async () => {
    const reqOptions = {
      method: 'get',
      url: `http://demo2-admin.innovixcommerce.com/detail/product/list?product_id=${product_id}`,
    };
    try {
      const response = await axios(reqOptions);
      setProductDetail(response.data.data[0]);
      // console.log(JSON.stringify(response.data.data, 0, 2));
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnAddToCart = () => {
    dispatch(addToCart(productDetail));
  };
  useEffect(() => {
    fetchingProductDetail();
  }, []);
  return (
    <>
      <ScrollView>
        <ProductBanner image_url={productDetail?.url_link} />
        <View style={[tw.style('pl-3 pr-3 pb-3')]}>
          <Section>
            <View style={[tw.style('flex-row items-center justify-between')]}>
              <View style={tw.style('w-3/4')}>
                <Text style={[tw.style('font-bold text-lg')]}>
                  {productDetail?.name}
                </Text>
              </View>
              <TouchableOpacity style={tw.style('w-full')}>
                <Text>
                  <Icon
                    name="hearto"
                    size={tw.style('text-lg').fontSize}
                    color={tw.color('yellow-600')}
                  />
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[tw.style('flex-row items-center justify-start mt-2')]}>
              <Text style={[{textDecorationLine: 'line-through'},tw.style('mr-5')]}>
                {productDetail.list_price * 0.2 + productDetail.list_price} KS
              </Text>
              <Text style={[tw.style('font-bold text-lg mr-5')]}>
                {productDetail?.list_price} KS
              </Text>
              <View style={tw.style('bg-yellow-600 p-1 mr-5')}>
                <Text style={tw.style('text-white')}>-20%</Text>
              </View>
            </View>
          </Section>
          {productDetail?.description && (
            <Section>
              <View style={[tw.style('flex-row items-center')]}>
                <Text style={[tw.style('font-bold text-base text-gray-400')]}>
                  {productDetail?.description}
                </Text>
              </View>
            </Section>
          )}
        </View>
      </ScrollView>
      <ButtonBar label={'Add To Cart'} onPress={handleOnAddToCart} />
    </>
  );
};

export default ProductDetailScreen;
