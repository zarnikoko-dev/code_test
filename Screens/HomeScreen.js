import React, {useEffect, useState} from 'react';
import {ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import CategorySection from '../Components/CategorySection';
import FilterTabs from '../Components/FilterTabs';
import FloatingButton from '../Components/FloatingButton';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = props => {
  const [categories, setCategories] = useState([]);
  const fetchingCategories = async () => {
    const reqOptions = {
      method: 'get',
      url: 'http://demo2-admin.innovixcommerce.com/product/categories',
    };
    try {
      const response = await axios(reqOptions);
      setCategories(response.data.data);
      // console.log(JSON.stringify(response.data, 0, 2));
    } catch (error) {
      console.log(error);
    }
  };
  const renderCategories = ({item}) => {
    return <CategorySection category={item} {...props} />;
  };
  useEffect(() => {
    fetchingCategories();
  }, []);
  return (
    <>
      <FilterTabs />
      <FloatingButton
        icon={
          <Icon name={'chatbubble-ellipses-sharp'} color="white" size={34} />
        }
      />
      <FlatList
        data={categories}
        contentContainerStyle={{flexGrow: 0}}
        keyExtractor={item => item.category_id}
        renderItem={renderCategories}
      />
    </>
  );
};

export default HomeScreen;
