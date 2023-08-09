import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoogleSigninButtonComponent from '../components/GoogleSigninButtonComponent';

const Favorites = () => {
  return (
    <View>
      <Text>Favorites</Text>
      <GoogleSigninButtonComponent />
    </View>
  );
}

export default Favorites

const styles = StyleSheet.create({})