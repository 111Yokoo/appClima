import { Text, View, StyleSheet, StatusBar, TextInput } from "react-native";
import Button from "./src/components/Button";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <View style={styles.conatiner}>
      <StatusBar barStyle={"light-content"} backgroundColor="#121212"/>
      <Text style={{fontSize: 35, fontWeight: 700}}>Entrar</Text>
      <TextInput 
        style={styles.searchInput}
        placeholderTextColor="#cccccc"
        value={email}
        placeholder="Digite seu Email"
        onChangeText={() => {}}
      />
      <TextInput 
        style={styles.searchInput}
        placeholderTextColor="#cccccc"
        value={password}
        placeholder="Digite sua Senha"
        onChangeText={() => {}}
      />
      <Button title="Acessar" color="#fff" backgroundColor="#1D2295"/>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingTop: 500,
    paddingHorizontal: 20, 
    backgroundColor: "#0E31AC",
    height: "100%"
  },
  searchInput:{

  }
});