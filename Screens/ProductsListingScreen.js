import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductsSection from '../Components/ProductsSection';

const ProductsListingScreen = props => {
  const {route} = props;
  const {category_id} = route.params;
  const [products, setProducts] = useState([]);
  const fetchingProducts = async () => {
    const reqOptions = {
      method: 'get',
      url: `http://demo2-admin.innovixcommerce.com/list/product?categ_id=${category_id}`,
    };
    try{
        const response = await axios(reqOptions);
        setProducts(response.data.data.product_list);
        // console.log(JSON.stringify(response.data.data.product_list, 0, 2));
    }catch(error){
        console.log(error)
    }
  };
  useEffect(() => {
    fetchingProducts();
  }, []);
  return (
    <ProductsSection product_list={products} {...props}/>
  );
};

export default ProductsListingScreen;
