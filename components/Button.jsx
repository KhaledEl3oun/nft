import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({PressHAndler, icon, styleText, title, styleButton}) => {

  const RenderCcontentIconOrText = () => {
    if (!icon) {
        return<Text style={styleText}>{title && title}</Text> 
    }else{
        return icon
    }
  }
  return (
    <TouchableOpacity onPress={PressHAndler && PressHAndler}
    style={styleButton}>
     <RenderCcontentIconOrText/>
    </TouchableOpacity>
  )
}

export default Button