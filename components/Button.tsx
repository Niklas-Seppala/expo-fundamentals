import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { TouchableOpacityProps, TextStyle, StyleProp } from 'react-native'
import { Colors } from '../constant/Colors';

type CustomButtonProps = TouchableOpacityProps & {
  textStyle?: StyleProp<TextStyle>,
  title: string
}

export function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity 
      {...props as TouchableOpacityProps}
      style={props.style ? props.style : styles.button}
      >
      <Text style={props.textStyle ? props.textStyle : styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5
  },
  text: {
    color: '#000',
    fontSize: 20
  }
})