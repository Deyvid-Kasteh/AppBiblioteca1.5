// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})


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

export default function Home() {
  const backgroundImage = require("../../img/bibli.jpg");
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
    <SafeAreaView style={styles.homePageContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
        blurRadius={5}
      >
        <View style={styles.homePage}>
          <View style={styles.homePageView}>
            <Text style={styles.text}>Biblioteca.</Text>
            <Ionicons
              name="md-person-circle-outline"
              size={50}
              color="#BFA054"
            />
          </View>
          <View style={styles.homePageBooksGender}>
            <View style={styles.homePageBooksTextGender}>
              <Text style={styles.Bookstext}>Fantasia</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {resultadosLivrosFantasia?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={{
                        borderWidth: 1,
                        borderColor: "#f5efe1",
                        borderRadius: 10,
                        overflow: "hidden",
                        margin: 2,
                      }}
                    >
                      <Image
                        style={{
                          width: 80,
                          height: 128,
                        }}
                        source={{
                          uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.homePageBooksGender}>
            <View style={styles.homePageBooksTextGender}>
              <Text style={styles.Bookstext}>Ficção</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {resultadosLivrosFiccao?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={{
                        borderWidth: 1,
                        borderColor: "#f5efe1",
                        borderRadius: 10,
                        overflow: "hidden",
                        margin: 2,
                      }}
                    >
                      <Image
                        style={{
                          width: 80,
                          height: 128,
                        }}
                        source={{
                          uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.homePageBooksGender}>
            <View style={styles.homePageBooksTextGender}>
              <Text style={styles.Bookstext}>Romance</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {resultadosLivrosRomance?.map((livro) => (
                <View key={livro.id}>
                  {livro.volumeInfo.imageLinks ? (
                    <TouchableOpacity
                      key={livro.id}
                      style={{
                        borderWidth: 1,
                        borderColor: "#f5efe1",
                        borderRadius: 10,
                        overflow: "hidden",
                        margin: 2,
                      }}
                    >
                      <Image
                        style={{
                          width: 80,
                          height: 128,
                        }}
                        source={{
                          uri: `${livro.volumeInfo.imageLinks.thumbnail}`,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
