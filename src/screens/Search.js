import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import ButtonCidade from "../components/MyButtonCidade";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const [cidades, setCidades] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("http://10.0.2.2:3000/previsoes")
      .then((response) => response.json())
      .then((data) => setCidades(data));
  }, []);


  const filteredCidade = query ?
    cidades.filter((item) => item.cidade.toLowerCase().includes(query.toLowerCase()))
    : cidades;

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%", paddingRight: 20, marginVertical: 5}}>
        <TouchableOpacity style={styles.buttonMaps} onPress={() => navigation.navigate("Map")}>
          <FontAwesome6 name="map-location-dot" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchInput}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          placeholderTextColor="#cccccc"
          value={query}
          placeholder="Buscar Cidade "
          onChangeText={(text) => setQuery(text)}
        />
      </View>
      {filteredCidade.map((cidade, index) => (
         <ButtonCidade cidade={cidade} key={index}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333131",
    paddingTop: 16,
  },
  searchInput: {
    height: 50,
    backgroundColor: "#A7A7A7",
    borderRadius: 20,
    padding: 10,
    color: "#000",
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 60,
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  noResultsText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  buttonMaps: {
    backgroundColor: "#A7A7A7", 
    borderRadius: 50,
    padding: 15,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
});