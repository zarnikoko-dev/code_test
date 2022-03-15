import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

const CategorySection = props => {
  const {category,navigation} = props;
  return (
    <View style={tw.style('flex mt-3')}>
      <View style={tw.style('items-center justify-center pt-3 pb-3 bg-white')}>
        <Text style={tw.style('text-lg font-bold text-gray-600')}>
          {category.category_name}
        </Text>
      </View>
      <View style={[tw.style('flex-row flex-wrap mt-2'),{paddingLeft:Dimensions.get('window').width * 0.025}]}>
        {category.sub_category?.map((cat, index) => {
          return (
            <TouchableOpacity
              style={[styles.item, tw.style('border rounded-xl')]}
              key={cat.category_id}
              onPress={() => {
                navigation.navigate('ProductsListing', {
                  category_id: cat.category_id,
                  category_name: cat.category_name,
                });
              }}>
              <Image
                style={{width: '50%', height: '50%'}}
                source={{uri: cat.category_image}}
                resizeMode={'cover'}
              />
              <Text
                style={tw.style('font-bold text-sm ml-2 mr-2')}
                numberOfLines={2}
                adjustsFontSizeToFit>
                {cat.category_name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginRight: Dimensions.get('window').width * 0.025,
    marginVertical: Dimensions.get('window').width * 0.015,
  },
});

export default CategorySection;
