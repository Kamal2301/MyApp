import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useGetProductListQuery from '../../Hooks/useGetProductListQuery';
import scaler from '../../Utils/scaler';
import ImageSlider from '../ImageSlider/ImageSlider';
type ProductViewProp = {
  productId: any;
};
function ProductView(props: ProductViewProp) {
  const {width} = useWindowDimensions();
  const [idArray, setIdArray] = useState<any>([0]);
  const [count, setCount] = useState(1);
  const {productId} = props;
  const {data} = useGetProductListQuery();
  const productList = data?.data?.products || [];
  const productItem =
    productList.filter((_it: any) => {
      if (productId === _it?.id) {
        return _it;
      }
    }) || {};
  const product = productItem[0];
  console.log(product);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        {product ? (
          <ImageSlider images={product?.images || []} />
        ) : (
          <View>
            <Image
              resizeMode="cover"
              style={{width: width, height: scaler(339)}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCYQdYAHQZF5Wqn9u85weOJdxOY3ZAayq9i6-YKLQgmPLZQ6PDxf5EiefySHVuo98ZDM&usqp=CAU',
              }}
            />
          </View>
        )}
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            right: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: scaler(10),
          }}>
          <MaterialCommunityIcons
            onPress={() => {
              if (idArray.includes(product.id)) {
                setIdArray(() => idArray.filter((d: any) => product.id !== d));
              } else {
                setIdArray((prevData: any) => {
                  const _data = [...prevData];
                  _data.push(product.id);
                  return _data;
                });
              }
            }}
            size={scaler(40)}
            name="heart"
            color={idArray.includes(product.id) ? '#FFD700' : '#E0E0E0'}
          />
        </View>
      </View>
      <View style={{marginHorizontal: scaler(16), marginTop: scaler(20)}}>
        <Text style={{fontSize: scaler(20), fontWeight: '700', color: 'black'}}>
          {product?.title}
        </Text>
        <View style={{height: scaler(10)}} />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{fontSize: scaler(20), fontWeight: '700', color: 'green'}}>
            ${product?.price}
          </Text>
          <View style={{width: scaler(10)}} />
          <Text
            style={{
              fontSize: scaler(16),
              fontWeight: '700',
              color: '#800000',
            }}>
            ({Math.round(product?.discountPercentage)}% Off)
          </Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            marginHorizontal: scaler(16),
            fontSize: scaler(15),
            fontWeight: '700',
          }}>
          Categories :
        </Text>
        <Text numberOfLines={1}>{product?.category}</Text>
      </View>
      <View style={{height: scaler(10)}} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',

          marginHorizontal: scaler(16),
        }}>
        <Rating
          imageSize={scaler(17)}
          readonly
          startingValue={product?.rating}
        />

        <Text style={{marginHorizontal: scaler(10)}}>({product?.rating})</Text>
      </View>
      <View style={{height: scaler(10)}} />
      <Text style={{marginHorizontal: scaler(16)}}>
        {product?.stock !== 0 ? 'In Stock' : 'Out of Stock'}
      </Text>
      <View
        style={{
          marginTop: scaler(10),
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginHorizontal: scaler(30),
        }}>
        <View
          style={{
            height: scaler(40),
            borderWidth: scaler(0.5),
            width: scaler(100),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View>
            <MaterialCommunityIcons
              disabled={count === 1}
              onPress={() => {
                setCount(count - 1);
              }}
              size={scaler(24)}
              name="minus"
            />
          </View>
          <View>
            <Text>{count}</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              disabled={product.stock === count}
              onPress={() => {
                setCount(count + 1);
              }}
              size={scaler(24)}
              name="plus"
            />
          </View>
        </View>
      </View>
      <View style={{height: scaler(20)}} />
      <View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: 'green',
            height: scaler(40),
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: scaler(40),
            borderRadius: scaler(5),
          }}>
          <Text style={{fontSize: scaler(10), fontWeight: '500'}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: scaler(20)}} />
      <View style={{marginHorizontal: scaler(16)}}>
        <Text style={{fontSize: scaler(20), fontWeight: '700', color: 'black'}}>
          Brand
        </Text>
      </View>
      <View style={{marginHorizontal: scaler(16)}}>
        <Text style={{fontSize: scaler(14), fontWeight: '500', color: 'black'}}>
          {product?.brand}
        </Text>
      </View>
      <View style={{height: scaler(10)}} />
      <View style={{marginHorizontal: scaler(16)}}>
        <Text style={{fontSize: scaler(20), fontWeight: '700', color: 'black'}}>
          Description
        </Text>
      </View>
      <View style={{marginHorizontal: scaler(16)}}>
        <Text style={{fontSize: scaler(14), fontWeight: '500', color: 'black'}}>
          {product?.description}
        </Text>
      </View>

      <View style={{height: scaler(200)}} />
    </View>
  );
}

export default ProductView;
