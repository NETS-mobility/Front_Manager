import React from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {SelectImg} from '../common/imageSubmit';

const ChangeProfileImage = ({img, setImg, setImgName}) => {
  const styles = StyleSheet.create({
    imgSection: {
      width: 95,
      height: 95,
      alignSelf: 'center',
      overflow: 'hidden',
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => SelectImg(setImg, setImgName)}>
      {img != '' && (
        <ImageBackground
          source={{uri: img}}
          width={95}
          height={95}
          style={styles.imgSection}
          imageStyle={{borderRadius: 50}}
        />
      )}
    </TouchableOpacity>
  );
};

export default ChangeProfileImage;
