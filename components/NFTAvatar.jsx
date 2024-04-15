import { View,StyleSheet,Image } from 'react-native'
import React from 'react'

const NFTAvatar = ({avatars}) => {
  return (
    <View style={styles.container}>
     {avatars.map((avatar) => {
      return (
      <Image key={avatar.id}
      source={avatar.image}
      resizeMode='cover'
      style={styles.avatar}/>)
     })}
    </View>
  )
}

export default NFTAvatar;

const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingHorizontal: 5 },
  avatar: {
    width: 35,
    height: 35,
    marginLeft: -7,
    borderRadius: 50,
  },
});