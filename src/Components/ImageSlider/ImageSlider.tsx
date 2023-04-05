/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useRef, useState} from 'react';
import {Pressable, useWindowDimensions, View} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
import scaler from '../../Utils/scaler';

type ImageSliderProps = {
  images: Array<string>;
};

function ImageSlider(props: ImageSliderProps) {
  const {images} = props;
  const [activeSlideIndex, setActiveSlideIndex] = useState<any>(0);

  const imagesUrl = images.map(_it => {
    return {
      url: _it,
    };
  });

  return (
    <View>
      <View>
        <View style={{height: scaler(400)}}>
          <ImageViewer
            backgroundColor="white"
            imageUrls={imagesUrl}
            enableImageZoom={true}
            //@ts-ignore
            renderIndicator={(currentIndex, allSize) =>
              setActiveSlideIndex(currentIndex)
            }
          />
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: scaler(10),
        }}>
        {images?.map((_, index) => (
          <Fragment key={index}>
            <View
              style={{
                marginHorizontal: scaler(1),
                width: scaler(8),
                height: scaler(8),

                backgroundColor:
                  activeSlideIndex === index + 1 ? 'white' : 'black',
                borderRadius: scaler(20),
              }}
            />
            {index < images.length - 1 && <View style={{width: scaler(3)}} />}
          </Fragment>
        ))}
      </View>
    </View>
  );
}

export default ImageSlider;
