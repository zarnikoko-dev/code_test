import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const FilterTabs = () => {
  const [filter, setFilter] = useState(1);
  return (
    <View style={tw.style('flex-row items-center')}>
      <TouchableOpacity
        style={tw.style(
          'flex-1 bg-yellow-600 items-center pt-3 pb-3 border-b-4 border-yellow-600',
          filter === 1 && 'border-white',
        )}
        activeOpacity={0.5}
        onPress={() => setFilter(1)}>
        <Text
          style={tw.style(
            'text-lg font-bold',
            filter === 1 && 'text-white font-normal',
          )}>
          CATEGORIES
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw.style(
          'flex-1 bg-yellow-600 items-center pt-3 pb-3 border-b-4 border-yellow-600',
          filter === 2 && 'border-white',
        )}
        activeOpacity={0.5}
        onPress={() => setFilter(2)}>
        <Text
          style={tw.style(
            'text-lg font-bold',
            filter === 2 && 'text-white font-normal',
          )}>
          BRANDS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw.style(
          'flex-1 bg-yellow-600 items-center pt-3 pb-3 border-b-4 border-yellow-600',
          filter === 3 && 'border-white',
        )}
        activeOpacity={0.5}
        onPress={() => setFilter(3)}>
        <Text
          style={tw.style(
            'text-lg font-bold',
            filter === 3 && 'text-white font-normal',
          )}>
          PROMOTIONS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterTabs;
