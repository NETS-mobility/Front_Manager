import React, {useState}  from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
import NetsLogo from "../../assets/image/logo.svg";
import {LoginInputBox} from "../../components/login/LoginInputBox";
import { LoginBtn } from "../../components/login/LoginBtn";
import typoStyles from "../../assets/fonts/typography";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return(
        <SafeAreaView style={styles.background}>
            <View>
                <View style={styles.logotext}>
                    <NetsLogo style={styles.logo} />
                    <View style={styles.line}>
                        <Text style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fwBold, styles.text]}>for 네츠매니저</Text>
                    </View>
                </View>
                <View style={styles.setcenter}>
                    <View style={styles.inputbox}>
                        <LoginInputBox isPass={false} placeHolder={"이메일"} Text={email} setText={setEmail} />
                        <LoginInputBox isPass={true} placeHolder={"비밀번호"} Text={pass} setText={setPass} />
                    </View>
                        <LoginBtn btnName={"로그인"}/>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:02-0000-0000`)}>
                            <Text style={styles.managertext}>관리자 문의</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'white',
    },
    line:{
        backgroundColor: '#19B7CD',
        width: '100%',
        height: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        marginBottom: 10,
    },
    text: {
        backgroundColor: 'white',
        width: '35%',
        textAlign: 'center',
    },
    logotext:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        marginTop: 70,
    },
    inputbox:{
        marginBottom: 50,
    },
    managertext:{
        fontSize: 15,
        color: '#737373',
    },
    setcenter:{
        alignItems: 'center',
    },
});

export default LoginScreen;