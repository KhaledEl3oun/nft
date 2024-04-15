import { View, Text, StyleSheet, Image, Animated, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import NFT4 from "../assets/image/NFT4.jpg"
import NFT5 from "../assets/image/NFT5.jpg"
import NFT6 from "../assets/image/NFT6.jpg"
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
    // animated
    const duration = 1000
const fadeImageAnimated = useRef(new Animated.Value(0)).current;
const moveImageAnimated = useRef(new Animated.ValueXY({x:100, y:100})).current;
const fadeTextAnimated = useRef(new Animated.Value(0)).current;
const moveButtonAnimated = useRef(new Animated.Value(1)).current;
// text animated
const  textAnimatedHandler =() => {
Animated.timing(fadeTextAnimated,{
duration,
toValue:1,
delay:1300,
useNativeDriver:true
        }).start();
}
// image animated
const  imageAnimatedHandler =() => {
 Animated.sequence(
    [
Animated.timing(fadeImageAnimated,{
duration,
toValue:1,
useNativeDriver:true
        }),
Animated.spring(moveImageAnimated,{
duration,
toValue:{x:0 ,y:0},
useNativeDriver:true
})
]).start();
}
// button animated
const  buttonAnimatedHandler =() => {
Animated.spring(moveButtonAnimated,{
duration,
friction:4,
toValue:0,
useNativeDriver:true
}).start();
}
    // navigation
const navigation = useNavigation()
const pressHandler = ()=> {
navigation.navigate('Home')
}

useEffect(()=> {
imageAnimatedHandler(),
textAnimatedHandler(),
buttonAnimatedHandler()
},[imageAnimatedHandler,textAnimatedHandler,buttonAnimatedHandler])

  return (
    <SafeAreaView style= {styles.container}>
      <Animated.View style={[styles.imageContainer,{
        opacity:fadeImageAnimated,
        transform:moveImageAnimated.getTranslateTransform()
        }]}>
        <View style={styles.imageCard}>
            <Image style={styles.image} source={NFT4}/>
        </View>

        <View style={[styles.imageCard, {top: SIZES.medium +17}]}>
            <Image style={styles.image} source={NFT5}/>
        </View>

        <View style={styles.imageCard}>
            <Image style={styles.image} source={NFT6}/>
        </View>
      </Animated.View>
      <Animated.View style={[styles.textContainer,{opacity:fadeTextAnimated}]}>
      <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
     <Animated.View style={[styles.buttonContainer,{
       transform:[
        {translateY:moveButtonAnimated.interpolate({
            inputRange:[0,1],
            outputRange:[0,200],
        })}
       ]
     }]}>
     <Button title={"Get Start"} PressHAndler={pressHandler}
      styleButton={styles.button}
      styleText={styles.textButton}/>
     </Animated.View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.small + 10,
        backgroundColor: COLORS.bg,
        alignItems: "center",
        justifyContent: "center"
      },
    imageContainer: {
        top: -  SIZES.medium,
        flexDirection: 'row',
        gap: SIZES.small
      },
    textContainer: {
        margin: SIZES.small,
        marginVertical: SIZES.Xlarge+ 6,
        padding: SIZES.small
      },
    mainText: {
        fontFamily:FONTS.bold,
        fontSize: SIZES.Xlarge+ 5,
        color: COLORS.white,
        textAlign: 'center'
      },
    subText: {
        fontFamily:FONTS.light,
        marginTop: SIZES.large,
        color: COLORS.grey,
        textAlign: 'center'
      },
    buttonContainer: {
        position:'absolute',
        marginVertical: SIZES.Xlarge,
        bottom: SIZES.Xlarge+10
      },
    button: {
        backgroundColor:COLORS.secound,
        padding: SIZES.small+4,
        borderRadius: SIZES.medium,
        width: 240,
        alignItems: 'center'
      },
    textButton: {
       color:COLORS.white,
       fontFamily:FONTS.semiBold,
       fontSize:SIZES.large
      },
    image: {
        width: 200,
        height: 200,
        borderRadius: SIZES.small
      },
    imageCard: {
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        backgroundColor: COLORS.cardBg
      },
})