import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import BlueBlock from "../../components/mypage/blueBlock";
import typoStyles from "../../assets/fonts/typography";
import { btnStyles } from "../../assets/fonts/button";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
    title:{
        marginBottom: 10,
    },
    btnsize:{
        width: 130,
        height: 30,
    },
    wrapbtn:{
        marginTop: 20,
        alignItems: 'flex-end',
    },
    wrap2btn: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

const AlarmBoxBtn = ({navWhere, btnName}) => {
    return(
        <TouchableNativeFeedback onPress={navWhere}>
            <View style={[btnStyles.btnBlue, styles.btnsize]}>
                <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>{btnName}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const AlarmBox = ({navigation, alarmName, alarmExplain, alarmTime, btnName}) => {
    return(
        <BlueBlock>
            <View style={styles.title}>
                <Text style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textMain]}>{alarmName}</Text>
            </View>
            <Text style={[typoStyles.fs15, typoStyles.fwBold, typoStyles.textExplain]}>{alarmExplain}</Text>
            <Text style={[typoStyles.fs15, typoStyles.fwBold, typoStyles.textExplain]}>서비스 일자: {alarmTime}</Text>
            {alarmName=="예약 확정 알림"? 
            <View  style={styles.wrap2btn}>
                <AlarmBoxBtn navWhere={()=>navigation.push('EditNotice')} btnName={"전달 사항 수정"} />
                <AlarmBoxBtn btnName={"전달 사항 전송"} />
            </View>
            :
            <View style={styles.wrapbtn}>
                <AlarmBoxBtn navWhere={navigation} btnName={btnName} />
            </View>
            }
        </BlueBlock>
    );
};
export {AlarmBox};