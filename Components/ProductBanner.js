import React from 'react';
import {View, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
const ProductBanner = props => {
 const {image_url} = props;
  return (
    <View
      style={[
        {height: 260},
        tw.style('bg-white mt-3 items-center justify-center'),
      ]}>
      <Image
        style={{width: '75%', height: '100%'}}
        source={{uri: image_url}}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default ProductBanner;
