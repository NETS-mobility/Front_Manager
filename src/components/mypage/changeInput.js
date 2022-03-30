import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';
import ImageSubmit from '../common/imageSubmit';

const styles = StyleSheet.create({
  detailbox: {
    width: 250,
    height: 52,
    borderBottomWidth: 2,
    color: 'black',
  },
  detailbigbox: {
    width: 310,
    height: 104,
    borderWidth: 2,
    borderColor: '#DAD8E0',
    shadowColor: '#DAD8E0',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: 'black',
  },
  detailout: {
    overflow: 'hidden',
    paddingBottom: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  boxalign: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  boxalign2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnbox: {
    width: 163,
    height: 52,
    borderBottomWidth: 2,
    color: 'black',
  },
  btn: {
    width: 87,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnset: {},
});

const ChangeInput = ({title, place1, text, setText, propName}) => {
  const [isfocused, setFocus] = useState(false);

  return (
    <View style={styles.boxalign}>
      <Text
        style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
        {title}
      </Text>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          styles.detailbox,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={place1}
        placeholderTextColor={'#DAD8E0'}
        autoCapitalize="none"
        value={text}
        // onChange={(e) => {
        //   e.persist();
        //   setText((prev) => ({...prev, [propName]: e.target.value}));
        // }}
        onChangeText={(text) =>
          setText((prev) => ({...prev, [propName]: text}))
        }
      />
    </View>
  );
};

const ChangeInputWithBtn = ({
  title,
  place1,
  text,
  setText,
  btntext,
  propName,
  onPress,
}) => {
  const [isfocused, setFocus] = useState(false);

  return (
    <View style={styles.boxalign}>
      <Text
        style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
        {title}
      </Text>
      <View style={styles.boxalign2}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={[
            styles.btnbox,
            {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
          ]}
          underlineColorAndroid={'transparent'}
          placeholder={place1}
          placeholderTextColor={'#DAD8E0'}
          autoCapitalize="none"
          value={text}
          // onChange={(e) => {
          //   e.persist();
          //   console.log('e===', e.target);
          //   setText((prev) => ({...prev, [propName]: e.target.value}));
          // }}
          onChangeText={(text) =>
            setText((prev) => ({...prev, [propName]: text}))
          }
        />
        <View style={styles.btnset}>
          <TouchableNativeFeedback onPress={onPress}>
            <View style={[btnStyles.btnDisable, styles.btn]}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textWhite,
                ]}>
                {btntext}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

const ChangeBigInput = ({title, text, setText, image, propName}) => {
  const [isfocused, setFocus] = useState(false);
  const [img, setImg] = useState('');

  return (
    <View>
      <Text
        style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
        {title}
      </Text>
      <View style={styles.detailout}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={styles.detailbigbox}
          underlineColorAndroid={'transparent'}
          autoCapitalize="none"
          defaultValue={text}
          // onChange={(e) => {
          //   e.persist();
          //   setText((prev) => ({...prev, [propName]: e.target.value}));
          // }}
          onChangeText={(text) =>
            setText((prev) => ({...prev, [propName]: text}))
          }
          multiline={true}
        />
      </View>
      {image ? <ImageSubmit img={img} setImg={setImg} /> : <></>}
    </View>
  );
};

export {ChangeInput, ChangeInputWithBtn, ChangeBigInput};
