import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [resultadosLivros, setResultadosLivros] = useState("");
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}