import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View,  } from "react-native";
import CommonLayout from "../../components/common/layout";
import typoStyles from "../../assets/fonts/typography";
import { btnStyles } from "../../assets/fonts/button";
import { AlarmBox } from "../../components/alarm/alarmBox";

const styles = StyleSheet.create({
    title:{
        marginLeft: 30,
        marginBottom: 20,
    },
    background: {
        backgroundColor: 'white',
    },
});

const AlarmScreen = ({navigation}) => {
    return(
        <CommonLayout>
            <ScrollView>
            <SafeAreaView style={styles.background}>
                <View style={styles.title}>
                    <Text style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>알림</Text>
                </View>
                    <AlarmBox navigation={navigation} alarmName={"예약 확정 알림"} alarmExplain={"새로운 예약이 있습니다. 전달 사항을 전송해주세요."} alarmTime={"2021년 10월 11일 12시 30분"} btnName={"추가 결제 하기"} />
                    <AlarmBox navigation={navigation} alarmName={"운행 하루 전 알림"} alarmExplain={"서비스 시작 하루 전입니다.\n고객님께 해피콜 해주세요."} alarmTime={"2021년 10월 11일 12시 30분"} btnName={"상세보기"} />
                    <AlarmBox navigation={navigation} alarmName={"운행 하루 전 알림"} alarmExplain={"서비스 시작 하루 전입니다.\n고객님께 해피콜 해주세요."} alarmTime={"2021년 10월 11일 12시 30분"} btnName={"상세보기"} />
                    <AlarmBox navigation={navigation} alarmName={"운행 하루 전 알림"} alarmExplain={"서비스 시작 하루 전입니다.\n고객님께 해피콜 해주세요."} alarmTime={"2021년 10월 11일 12시 30분"} btnName={"상세보기"} />
                
            </SafeAreaView>
            </ScrollView>
        </CommonLayout>
    );
};

export default AlarmScreen;