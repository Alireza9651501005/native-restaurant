import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  TextInput,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';

import Card from '../components/Card';
import {
  useDeviceOrientation,
} from '@react-native-community/hooks';

import ListCategories from '../components/ListCategories';

const HomeScreen = ({navigation}) => {
  const {portrait} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 160}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row', marginLeft: portrait? 0 : 150}}>
            <Text style={{fontSize: portrait? 18 : 15}}>به رستوران من خوش آمدید!</Text>
            <Text style={{fontSize: portrait? 18 : 15, fontWeight: 'bold', marginLeft: 10}}>
              سلام
            </Text>
          </View>
          {/* <Text style={{marginTop: 5, fontSize: portrait? 20 : 15, color: COLORS.grey}}>
            امروز چی میخوای سفارش بدی ؟!
          </Text> */}
        </View>
        <Image
          source={{uri: 'https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png'}}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View style={[style.searchBox, {marginBottom: 10}]}>
        <View style={[style.inputContainer, {width: portrait ? 200 : 300}]} >
          <Icon name="search" size={28} />
          <TextInput style={{flex: 1, fontSize: 18}} placeholder="جستجوی غذا" />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View style={style.constentCards}>
        <ListCategories />
      </View>
      </View>
      <View style={style.constentCards}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} navigation={navigation}/>}
      />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    // margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 100,
  },
  constentCards: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
  },

  inputContainer: {
    // flex: 1,

    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox : {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
});

export default HomeScreen;
