import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <View style={styles.container}>
      <Text>Book teste</Text>
      <Image
        style={{
          width: 80,
          height: 128,
        }}
        source={{
          uri: {route.params.image},
        }}
      />
      <Text>{route.params.name}</Text>
      <Text>{route.params.description}</Text>
      <Text>{route.params.image}</Text>

      <Button title="Voltar" onPress={() => goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});