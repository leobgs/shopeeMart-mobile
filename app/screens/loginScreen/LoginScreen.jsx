import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/AuthService";
import { setAuthenticate, setPassword, setRole, setUsername } from "../../store/reducers/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"

export default function LoginScreen() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.username);
  const password = useSelector((state) => state.users.password);
  const navigation = useNavigation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        username: username,
        password: password
      })

      dispatch(setAuthenticate(true))
      dispatch(setRole(response.data.role))
      await AsyncStorage.setItem("authenticate", "true");
      await AsyncStorage.setItem("role", response.data.role)
      await AsyncStorage.setItem("token", response.data.token)
      await AsyncStorage.setItem("username", username)
      navigation.navigate("HomeScreen")
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={(e) => dispatch(setUsername(e))}
          // onChangeText={onChangeText}
          value={username}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => dispatch(setPassword(e))}
          value={password}
          placeholder="password"
        //   keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
