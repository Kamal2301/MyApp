import React from 'react';
import {FlatList, View} from 'react-native';
import useGetProductListQuery from '../../Hooks/useGetProductListQuery';
import {styles} from '../../Utils/GlobalStyle';
import ProductListItem from '../ProductListItem/ProductListItem';
import scaler from '../../Utils/scaler';

function ProductList() {
  const {data} = useGetProductListQuery();
  const productList = data?.data?.products;
  console.log(data?.data?.products);

  return (
    <View style={[styles.container, {marginTop: scaler(15)}]}>
      <FlatList
        data={productList}
        renderItem={({item}) => <ProductListItem item={item} />}
        ItemSeparatorComponent={() => <View style={{height: scaler(15)}} />}
        ListFooterComponent={<View style={{height: scaler(15)}} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ProductList;
