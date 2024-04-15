import { View, Text, StyleSheet,Animated, SafeAreaView } from 'react-native'
import React, { useRef,useEffect } from 'react'
import {COLORS, FONTS, SIZES, DATA} from '../constants';
import NFTImage from "../components/NFTImage";
import NFTAvatar from"../components/NFTAvatar";
import NFTTitle from"../components/NFTTitle";
import NFTInfo from"../components/NFTInfo";
import NFTMoreInfo from '../components/NFTMoreInfo';
import { FontAwesome } from '@expo/vector-icons';
import Button from "../components/Button";

const Details = ({route, navigation}) => {

  const moveAnimated = useRef(new Animated.Value(0)).current;
  const fadeAnimated = useRef(new Animated.Value(0)).current;
  MoveAnimatedHandler = () => {
    Animated.spring(moveAnimated, {
      toValue: 1,
      duration: 1000,
      delay:300,
      useNativeDriver:true
    }).start();
  }
  fadeAnimatedHandler = () => {
    Animated.timing(fadeAnimated, {
      toValue: 1,
      friction: 4,
      useNativeDriver:true
    }).start();
  }

useEffect(() => {
MoveAnimatedHandler(),fadeAnimatedHandler()
},[MoveAnimatedHandler,fadeAnimatedHandler])

  const pressHandler = () => {
    navigation.goBack()
  }
  const {NFTData} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{transform:[{translateY:moveAnimated.interpolate({
        inputRange:[0,1],
        outputRange:[200,0]
      })}]}}>
    <View >
      <NFTImage image={NFTData.image} imageStyle={styles.imageStyles}
      love
      arrow 
      pressHandler={pressHandler}/>
    </View>
    <View style={{marginHorizontal:SIZES.large}}>
    <View style={{marginTop:-SIZES.Xlarge,paddingHorizontal:SIZES.small}}>
      <NFTAvatar avatars={NFTData.avatars}/>
    </View>
    <View style={{marginVertical:SIZES.medium}}>
      <NFTTitle 
      _name={NFTData.name}
      date={NFTData.date}
      creator={NFTData.creator}
      />
       </View>
       <View>
        <NFTInfo
         comments={NFTData.comments}
         views={NFTData.views}
         price={NFTData.price}
        />
       </View>
       <View style={{marginTop:SIZES.medium}}>
        <NFTMoreInfo 
        address={NFTData.address}
        tokenId={NFTData.tokenId}
        tokenSt={NFTData.tokenSt}
        blockchain={NFTData.blockchain}
        />
       </View>
        </View>
       <Animated.View style={[styles.buttonContainer,{
        opacity:fadeAnimated
       }]}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.text}> Top bid</Text>
          <View style={{flexDirection:'row',alignItems:'center',gap:2,padding:SIZES.small-4}}>
          <FontAwesome name="dollar" size={20} color="white" />
            <Text style={styles.text}> {NFTData.topBid}</Text>
          </View>
          </View>
          <Button styleButton={styles.button} title={'place a bid'} styleText={styles.textButton}/>
       </View>
       </Animated.View>
       </Animated.View>
    </SafeAreaView>
  )
}

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },

  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.Xlarge-120,
   justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.secound,
    padding: 12,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});