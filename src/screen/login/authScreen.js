import React, {useState} from "react";
import { SafeAreaView, Text, View,  StyleSheet} from "react-native";
import Close from "../../assets/icon/close.svg";
import typoStyles from "../../assets/fonts/typography";
import { AuthInputBox, AuthInputBoxWithoutBtn } from "../../components/login/LoginInputBox";
import { OkBtn } from "../../components/login/LoginBtn";

const AuthScreen = () => {
    const [phone, setPhone] = useState("");
    const [authnum, setAuthnum] = useState("");
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.closebtn}>
                <Close />
            </View>
            <View style={styles.setcenter}>
                <View>
                    <View style={styles.title}>
                        <Text style={[typoStyles.fs32, typoStyles.textMain, typoStyles.fwBold]}>휴대전화 인증</Text>
                        <Text style={[typoStyles.fs15, typoStyles.textExplain, typoStyles.fwBold]}>최초 로그인 시 휴대전화 인증이 필요합니다.</Text>
                    </View>
                    <Text style={[typoStyles.fs15, typoStyles.textExplain, typoStyles.fwBold]}>휴대전화 번호를 입력해주세요.</Text>
                    <AuthInputBox isPass={false} placeHolder={"휴대전화 번호"} value={phone} setValue={setPhone}/>
                    <AuthInputBoxWithoutBtn isPass={false} placeHolder={"발송된 인증번호 입력"} value={authnum} setValue={setAuthnum} />
                </View>
                <View style={styles.btnstyle}>
                    <OkBtn btnName={"확인"} />
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
    closebtn:{
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
    },
    title:{
        marginBottom: 70,
    },
    btnstyle:{
        flex: 1,
        justifyContent:'flex-end',
        marginBottom: 40,
    },
    setcenter:{
        flex: 7,
        alignItems: 'center',
    },
});

export default AuthScreen;