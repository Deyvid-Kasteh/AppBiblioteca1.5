import { View, Text } from 'react-native'
import React from 'react'

export default function GoogleSigninButtonComponent() {
  return (<></>
    <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={this._signIn}
  disabled={this.state.isSigninInProgress}
/>;
  )
}