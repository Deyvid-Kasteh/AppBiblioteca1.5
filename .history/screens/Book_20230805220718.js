import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <ScrollView >
      <Text>Book teste</Text>
      <Image
        style={{
          width: 240,
          height: 384,
        }}
        source={{
          uri: `${route.params.image}`,
        }}
      />
      <Text>{route.params.name}</Text>
      <Text>{route.params.description}</Text>

      <Button title="Voltar" onPress={() => goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});