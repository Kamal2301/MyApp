import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductList from '../../Components/ProductList/ProductList';
import {styles} from '../../Utils/GlobalStyle';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
}

export default HomeScreen;
