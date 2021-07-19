import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../consts/colors';
import {
  useDeviceOrientation,
} from '@react-native-community/hooks';

const PrimaryButton = ({title, onPress = () => {}}) => {
  const {landscape, portrait} = useDeviceOrientation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[style.btnContainer, {marginTop: portrait? 0 : 20}]}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...style.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 200,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};
