import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import NFTCard from '../components/NFTCard';
import { COLORS, DATA, FONTS, SIZES } from '../constants';
import { FlashList } from '@shopify/flash-list';

const Home = () => {
  const searchHandler = (value) => {
    if (value) {
      const filterData = DATA.filter((nft) => nft.name.toLowerCase().includes(value.toLowerCase()));
      setNftData(filterData);
    }else{
      setNftData(DATA)
    }
  };

  const NotFoundNFT = () => {
   return(
    <View style={styles.notFoundContainer}>
    <Text style={styles.notFoundText}>Opps...!</Text>
    <Text style={styles.notFoundText}>Not Found The NFT</Text>
        </View>
   )
  }

searchAnimatedHandler = () => {
  Animated.spring(moveSearchAnimated, {
    toValue: 1,
    friction: 4,
    useNativeDriver:true
  }).start();
}
useEffect(() =>{
searchAnimatedHandler()
},[searchAnimatedHandler])
const moveSearchAnimated = useRef(new Animated.Value(0)).current;
 const [nftData, setNftData] = useState(DATA)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
       <Animated.View style={{
        top:-100,
        transform:[{
          translateY:moveSearchAnimated.interpolate({
          inputRange:[0,1],
          outputRange:[0,100]
          })
        }]
       }}>
       <HomeHeader searchHandler={searchHandler}/>
       </Animated.View>
      {!nftData.length ? (
      <NotFoundNFT/>
      ):(
        <FlashList 
        data={nftData}
        renderItem={({item}) => <NFTCard NFTData={item}/>}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}/>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      paddingTop:40,
        flex: 1,
        backgroundColor: COLORS.bg,
       
      },
      notFoundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.Xlarge,
      },
      notFoundText: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: SIZES.Xlarge,
      },
})