import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <View>
      <Text>Book teste</Text>
      <Text>{route.params.name}</Text>
      <Button title="Voltar" onPress={() => goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({})