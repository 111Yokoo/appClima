import { Text, View, StyleSheet, StatusBar, TextInput } from "react-native";
import Button from "./src/components/Button";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  // Credenciais
  const credentialsEmail = "aluno@senai.com.br";
  const credentialsPassword = "aluno123";

  function handleSubmit(){
    setError("");
    if(!email.trim()){
      setError("Por favor, insira um email.");
      return;
    }
    if(!password.trim()){
      setError("Por favor, insira uma senha.");
      return;
    }
    if(email !== credentialsEmail || password !== credentialsPassword){
      setError("Credenciais inválidas");
      setEmail("");
      setPassword("");
    }
    navigation.navigate("Home", {username: credentialsEmail});
  }

  return (
    <View style={styles.conatiner}>
      <StatusBar barStyle={"light-content"} backgroundColor="#121212"/>
      <Text style={{fontSize: 35, fontWeight: 700, color: "#fff"}}>Entrar</Text>
      <View style={styles.containerSearch}>
        <Foundation name="at-sign" size={29} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#cccccc"
          placeholder="Digite seu Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.containerSearch}>
        <Entypo name="lock" size={23} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#cccccc"
          placeholder="Digite sua Senha"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={{display: "flex", alignItems: "center", marginVertical: 25}}>
        <Button title="Acessar" color="#fff" onPress={() => {handleSubmit()}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingTop: 400,
    paddingHorizontal: 20, 
    backgroundColor: "#0E31AC",
    height: "100%"
  },
  containerSearch: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  searchInput:{
    height: 30,
    fontSize: 18,
    color: "#fff"
  },
  errorText:{
    color: "red",
    fontSize: 15
  }
});