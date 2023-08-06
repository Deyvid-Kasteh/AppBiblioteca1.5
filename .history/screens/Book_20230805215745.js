import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Book({ navigation: { goBack }, route }) {

  return (
    <View style={styles.container}>
      <Text>Book teste</Text>
      <Text>{route.params.name.volumeInfo.title}</Text>
      <Text>{route.params.name.id}</Text>
      <Text>{route.params.name.description}</Text>

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