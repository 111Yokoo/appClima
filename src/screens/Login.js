import { Text, View, StyleSheet, TextInput, Image} from "react-native";
import Button from "../components/Button";
import Fundo from "../assets/planoFundoLogin.jpeg";
import Logo from "../assets/Logo.png";
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
  const credentialsEmail = "instrutor";
  const credentialsPassword = "senaisp";

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
    if(email === credentialsEmail || password === credentialsPassword){
      navigation.navigate("Search");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={Fundo} style={{height: "100%", zIndex: -1, position: "relative"}}/>
      
      <View style={styles.conatinerForms}>
        <View style={styles.logo}>
          <Image source={Logo} style={{width: 400,  zIndex: 1, position: "relative"}}/>
        </View>
        <View>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  conatinerForms: {
    paddingHorizontal: 10,
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  imageFundo: {
    zIndex: -1,
  },
  containerSearch: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    gap: 20,
  },
  searchInput:{
    height: 30,
    fontSize: 18,
    color: "#fff",
  },
  errorText:{
    color: "white",
    fontSize: 15
  }
});