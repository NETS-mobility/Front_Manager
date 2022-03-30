import React from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const ChangeProfileImage = ({img, setImg, setImgName}) => {
  const selectImg = () => {
    launchImageLibrary({mediaType: 'photo'}, (res) => {
      if (res.didCancel) {
        return;
      }
      setImg(res.assets[0].uri);
      setImgName(res.assets[0].fileName);
    });
  };

  const styles = StyleSheet.create({
    imgSection: {
      width: 95,
      height: 95,
      alignSelf: 'center',
      overflow: 'hidden',
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={selectImg}>
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
