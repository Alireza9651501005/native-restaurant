import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import COLORS from '../../consts/colors';
import {Badge} from 'react-native-elements';
import {addtocart} from '../../redux/action';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Card = ({food, navigation}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const newState = state;
  const newItem = newState.find((e) => e.id === food.id);
  return (
    <View style={style.card}>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <>
          <View style={{alignItems: 'center'}}>
            <Image source={{uri:food.image}} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
        </>
      </TouchableHighlight>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>${food.price}</Text>
        <View style={style.addToCartBtn}>
          <TouchableOpacity onPress={() => dispatch(addtocart(food))}>
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Badge
            status="error"
            value={newItem ? newItem.count : 0}
            containerStyle={{position: 'absolute', top: -10, left: -15}}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
