import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import scaler from '../../Utils/scaler';
import {Rating} from 'react-native-ratings';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../Navigation/StackNavigators/MainStackNavigator';

type ProductListItemProp = {
  item: any;
};

function ProductListItem(props: ProductListItemProp) {
  const {item} = props;
  const [idArray, setIdArray] = useState<any>([0]);

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductView', {productId: item?.id});
      }}>
      <View style={styles.item}>
        <View>
          <Image
            resizeMode="contain"
            source={{uri: item?.thumbnail}}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles?.horizontalLine} />
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={2}
                style={{fontSize: scaler(17), fontWeight: '600'}}>
                {item?.title}
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                onPress={() => {
                  if (idArray.includes(item.id)) {
                    setIdArray(() => idArray.filter((d: any) => item.id !== d));
                  } else {
                    setIdArray((prevData: any) => {
                      const _data = [...prevData];
                      _data.push(item.id);
                      return _data;
                    });
                  }
                }}
                size={scaler(25)}
                name="heart"
                color={idArray.includes(item.id) ? '#FFD700' : '#E0E0E0'}
              />
            </View>
          </View>
          <View>
            <Text
              numberOfLines={2}
              style={{
                fontSize: scaler(14),
                fontWeight: '500',
                textTransform: 'capitalize',
              }}>
              {item?.category}
            </Text>
          </View>
          <View>
            <Text numberOfLines={2}>{item?.description}</Text>
          </View>
          <View
            style={{
              marginVertical: scaler(16),
              alignItems: 'center',

              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: scaler(10),
            }}>
            <View style={{flex: 1}}>
              {/* <TouchableOpacity
                onPress={() => {}}
                style={{
                  backgroundColor: 'green',
                  height: scaler(30),
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: scaler(8),
                  borderRadius: scaler(5),
                }}>
                <Text style={{fontSize: scaler(10), fontWeight: '500'}}>
                  Add to Cart
                </Text>
              </TouchableOpacity> */}
              <Text
                numberOfLines={1}
                style={{
                  fontSize: scaler(14),
                  fontWeight: '600',
                  color: '#85d3f6',
                }}>
                ${item?.price}
              </Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Rating
                imageSize={scaler(13)}
                readonly
                startingValue={item?.rating}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductListItem;

export const styles = StyleSheet.create({
  item: {
    marginHorizontal: scaler(16),
    padding: scaler(10),
    backgroundColor: '#ffffff',
    elevation: 1,

    flexDirection: 'row',
  },
  horizontalLine: {
    marginHorizontal: scaler(10),
    width: scaler(1),
    backgroundColor: '#d3d3d3',
  },
  imageStyle: {
    height: scaler(125),
    width: scaler(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
