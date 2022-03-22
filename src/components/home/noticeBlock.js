import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
const styles = StyleSheet.create({
  notiBlock: {
    width: 330,
    paddingHorizontal: 42,
    paddingVertical: 17,
    backgroundColor: '#19b7cd',
    borderWidth: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 18,
  },
  contents: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderWidth: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 16,
  },
  marginText: {
    marginTop: 10,
  },
});

const NoticeBlock = ({data, navi}) => {
  return (
    <View style={styles.notiBlock}>
      <Text style={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw700]}>
        {data.name}님, 안녕하세요!
      </Text>
      {data.service?.length ? (
        <Text
          style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fwRegular]}>
          예약된 서비스가 있습니다.
        </Text>
      ) : (
        <Text
          style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fwRegular]}>
          예약된 서비스가 없습니다.
        </Text>
      )}
      {data.service?.map((content, i) => {
        const pickupString = `${content.rev_date.substring(
          0,
          10,
        )} ${content.pickup_time.substring(0, 5)}`;
        return (
          <TouchableOpacity
            style={styles.contents}
            onPress={() => navi.push('ServiceDetail', {detailId: content.id})}>
            <Text
              style={[
                typoStyles.textExplainBold,
                typoStyles.fs15,
                typoStyles.fw700,
                {textAlign: 'center'},
              ]}>
              {pickupString}
            </Text>
            <Text
              style={[
                typoStyles.textExplainBold,
                typoStyles.fs15,
                typoStyles.fw700,
                {textAlign: 'center'},
              ]}>
              {content.service_type}
            </Text>
            <Text
              style={[
                typoStyles.textExplainBold,
                typoStyles.fs15,
                typoStyles.fw700,
                {textAlign: 'center'},
              ]}>
              {content.departure_address}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export {NoticeBlock};
