import { Text, View, StyleSheet, StatusBar, TextInput } from "react-native";
import Button from "../components/Button";


export default function Login() {
  return (
    <View style={styles.conatiner}>
      <StatusBar barStyle={"light-content"} backgroundColor="#121212"/>
      <Text>Entrar</Text>
      <TextInput 
        style={styles.searchInput}
        placeholderTextColor="#cccccc"
        value=""
        placeholder="Digite seu Email"
        onChangeText={() => {}}
      />
      <TextInput 
        style={styles.searchInput}
        placeholderTextColor="#cccccc"
        value=""
        placeholder="Digite sua Senha"
        onChangeText={() => {}}
      />
      <Button title="Acessar" />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingTop: 20,
  },
  searchInput:{

  }
});