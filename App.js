import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/screens/loginScreen/LoginScreen";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// import { Provider } from "react-redux";
// import { store } from "./app/store/store";
// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import HomeScreen from "./app/screens/homeScreen/HomeScreen";
// import * as SecureStore from "expo-secure-store";

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </Provider>
    // <ClerkProvider publishableKey="pk_test_cmVmaW5lZC1tYXJ0aW4tNjQuY2xlcmsuYWNjb3VudHMuZGV2JA" tokenCache={tokenCache}>
    //   <Provider store={store}>
    //     <SignedIn>
    //       <HomeScreen />
    //     </SignedIn>
    //     <SignedOut>
    //       <View style={styles.container}>
    //         <LoginScreen />
    //       </View>
    //     </SignedOut>
    //   </Provider>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
