import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const [resultadosLivrosFantasia, setResultadosLivrosFantasia] = useState();
  const [resultadosLivrosFiccao, setResultadosLivrosFiccao] = useState();
  const [resultadosLivrosRomance, setResultadosLivrosRomance] = useState();
  const nomeDoLivroFantasia = "o castelo animado";
  const nomeDeAutorFiccao = "alienista";
  const nomeDaObraRomance = "a megera domada";




  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDoLivroFantasia}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosFantasia(data.items));

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDeAutorFiccao}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosFiccao(data.items));

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${nomeDaObraRomance}&maxResults=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setResultadosLivrosRomance(data.items));
  }, []);





  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
