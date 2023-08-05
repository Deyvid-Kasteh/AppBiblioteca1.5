// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {
  Text,
  TextInput,
  ImageBackground,
  View,
  Pressable,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import styles from "./homepageStyle";
import { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";

  const backgroundImage = require("../../img/bibli.jpg");
  const [resultadosLivrosFantasia, setResultadosLivrosFantasia] = useState();

  const [resultadosLivrosFiccao, setResultadosLivrosFiccao] = useState();

  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState();

  const nomeDoLivroFantasia = "o castelo animado";
  const nomeDeAutorFiccao = "alienista";
  const nomeDaObraRomance = "a megera domada";













const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
