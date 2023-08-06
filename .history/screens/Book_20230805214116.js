import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <View>
      <Text>Book teste</Text>
      <Text>{route.params.names[0]}</Text>
      <Text>{route.params.names[1]}</Text>
      <Text>{route.params.names[2]}</Text>
      <Button title="Voltar" onPress={() => goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({})