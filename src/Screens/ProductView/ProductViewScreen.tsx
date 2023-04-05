import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import ProductView from '../../Components/ProductView/ProductView';
import {MainStackParamList} from '../../Navigation/StackNavigators/MainStackNavigator';
import {styles} from '../../Utils/GlobalStyle';
import scaler from '../../Utils/scaler';

function ProductViewScreen() {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList, 'ProductView'>>();
  const {productId} = route?.params || {};
  return (
    <View style={styles?.container}>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: scaler(13),
          elevation: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          onPress={() => {
            navigation.goBack();
          }}
          size={scaler(25)}
          name="arrow-left"
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: scaler(16), fontWeight: '700'}}>
            Product Detail
          </Text>
        </View>
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <ProductView productId={productId} />
      </ScrollView>
    </View>
  );
}

export default ProductViewScreen;
