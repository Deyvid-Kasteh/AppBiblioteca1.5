import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  Pressable,
  Keyboard,
  ScrollView,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [resultadosLivros, setResultadosLivros] = useState("");
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
  );

export default Search;

const styles = StyleSheet.create({});
