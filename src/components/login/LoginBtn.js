import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import { btnStyles } from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
    loginBtn: {
        width: 245,
        height: 52,
        marginBottom: 16,
    },
    okbtn: {
        width: 245,
        height: 47,
    },
});

const LoginBtn = ({navWhere, btnName}) => {
    return(
        <TouchableNativeFeedback onPress={navWhere}>
            <View style={[btnStyles.btnWhite, styles.loginBtn]}>
                <Text style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fwBold]}>
                    {btnName}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const OkBtn = ({navWhere, btnName}) => {
    return(
        <TouchableNativeFeedback onPress={navWhere}>
            <View style={[btnStyles.btnBlue, styles.okbtn]}>
                <Text style={[typoStyles.fs20, typoStyles.textWhite, typoStyles.fwBold]}>
                    {btnName}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export {LoginBtn, OkBtn};
