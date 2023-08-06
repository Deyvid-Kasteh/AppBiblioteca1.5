import { View, Text } from 'react-native'
import React from 'react'

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [resultadosLivros, setResultadosLivros] = useState("");
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}