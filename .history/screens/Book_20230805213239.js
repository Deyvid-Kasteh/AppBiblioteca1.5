import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Book() {
    const { navigate } = useNavigation();

  return (
    <View>
      <Text>Book teste</Text>
      <Button title='Voltar' onPress={()=> navigate.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({})