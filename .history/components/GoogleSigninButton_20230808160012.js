import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

<GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={this._signIn}
  disabled={this.state.isSigninInProgress}
/>;
