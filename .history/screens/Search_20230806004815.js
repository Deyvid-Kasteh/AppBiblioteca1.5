import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [resultadosLivros, setResultadosLivros] = useState("");
  const handleSeeBook = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=20`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivros(data.items));
    Keyboard.dismiss();
  };
  const apagar = () => {
    setResultadosLivros("");
    setSearchText("");
    Keyboard.dismiss();
  };
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}