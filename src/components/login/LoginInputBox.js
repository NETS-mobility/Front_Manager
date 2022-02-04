import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback, TextInput} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import { btnStyles } from '../../assets/fonts/button';

const styles = StyleSheet.create({
    input: {
        width: 252,
        height: 52,
        borderBottomWidth: 2,
    },
    authinput: {
        width: 300,
        height: 52,
        borderBottomWidth: 2,
        marginBottom: 8,
    },
    authbtn:{
        width: 300,
        height: 30,
    },
});

const LoginInputBox = ({isPass, placeHolder, Text, setText}) => {

    const [isfocused, setFocus] = useState(false);

    return (
        <View>
            <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                secureTextEntry={isPass}
                style={[styles.input, {borderBottomColor: isfocused? '#19B7CD' : '#DAD8E0'}]}
                underlineColorAndroid={"transparent"}
                placeholder={placeHolder}
                placeholderTextColor={typoStyles.textDisable}
                autoCapitalize='none'
                value={Text}
                onChangeText={setText}
            />

        </View>
    );
};

const AuthInputBox = ({isPass, placeHolder, value, setValue}) => {

    const [isfocused, setFocus] = useState(false);

    return (
        <View>
            <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                secureTextEntry={isPass}
                style={[styles.authinput, {borderBottomColor: isfocused? '#19B7CD' : '#DAD8E0'}]}
                underlineColorAndroid={"transparent"}
                placeholder={placeHolder}
                placeholderTextColor={typoStyles.textDisable}
                autoCapitalize='none'
                value={value}
                onChangeText={setValue}
            />
            <TouchableNativeFeedback>
                <View style={isfocused? [btnStyles.btnBlue, styles.authbtn]:[btnStyles.btnDisable, styles.authbtn]}>
                    <Text style={[typoStyles.fs14, typoStyles.textWhite, typoStyles.fwBold]}>인증번호 전송</Text>
                </View>
            </TouchableNativeFeedback>

        </View>
    );
};

const AuthInputBoxWithoutBtn = ({isPass, placeHolder, value, setValue}) => {

    const [isfocused, setFocus] = useState(false);

    return (
        <View>
            <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                secureTextEntry={isPass}
                style={[styles.authinput, {borderBottomColor: isfocused? '#19B7CD' : '#DAD8E0'}]}
                underlineColorAndroid={"transparent"}
                placeholder={placeHolder}
                placeholderTextColor={typoStyles.textDisable}
                autoCapitalize='none'
                value={value}
                onChangeText={setValue}
            />

        </View>
    );
};

export {LoginInputBox, AuthInputBox, AuthInputBoxWithoutBtn};