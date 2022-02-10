import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableNativeFeedback  } from "react-native";
import typoStyles from "../../../assets/fonts/typography";
import CommonLayout from "../../../components/common/layout";
import { btnStyles } from "../../../assets/fonts/button";
import { ChangeInput, ChangeInputWithBtn } from "../../../components/mypage/changeInput";

const styles=StyleSheet.create({
    background:{
        backgroundColor: 'white',
    },
    title:{
        marginLeft: 30,
        marginBottom: 30,
    },
    setcenter: {
        alignItems: 'center',
        height: '70%',
    },
    savebtn:{
        width:300,
        height:47,
    },
    wrapbtn:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 100,
    },
});

const ChangeInfo = () => {
    const [name, setName] = useState("");
    return(
        <CommonLayout>
            <SafeAreaView style={styles.background}>
                <View style={styles.title}>
                    <Text style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>마이페이지</Text>
                </View>
                <View>
                    <View style={styles.setcenter}>
                        <ChangeInput title={"이름"} place1={"이름"} Text1={name} setText1={setName} />
                        <ChangeInputWithBtn title={"이메일"} place1={"이메일"} Text1={name} setText1={setName} btntext={"중복확인"} />
                        <ChangeInputWithBtn title={"휴대전화"} place1={"휴대전화"} Text1={name} setText1={setName} btntext={"인증번호전송"}/>
                        <ChangeInput title={"자격증"} place1={"자격증 이름"} Text1={name} setText1={setName} />
                    </View>
                </View>
                <View style={styles.wrapbtn}>
                    <TouchableNativeFeedback>
                        <View style={[btnStyles.btnDisable, styles.savebtn]}>
                            <Text style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textWhite]}>변경 정보 저장</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

export default ChangeInfo;