import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const CustomImagePicker = () =>{
    const showPicker = () => {
        const options= {
            title: '프로필 사진 선택',
            takePhotoButtonTitle: '카메라',
            chooseFromLibraryButtonTitle: '이미지 선택',
        };

        ImagePicker.showImagePicker(options, ()=>{})
    }

    return (
        <View>
            <Button title="show Picker" onPress={showPicker}></Button>
        </View>
    );
};

export {CustomImagePicker};