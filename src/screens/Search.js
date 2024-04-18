import { useState , useEffect} from "react";
import { View, Text , Image, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import Foto from '../assets/nublado.png'
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

export default function Search(){
  const [cidade, setCidade] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("http://10.0.2.2:3000/previsoes")
    .then((response) => response.json())
    .then((data)=> setCidade(data));
  }, []);

  const filteredCidade = query ? 
  cidade.filter((item) => item.cidade.toLowerCase().includes(query.toLowerCase()))
  : cidade;
  
  const navigation = useNavigation();

  function entrarPaginas(cidade){
    if(cidade == "São Paulo"){
      navigation.navigate("WeatherDetails",  );
    }
    if(cidade == "Rio de Janeiro"){
      navigation.navigate("RioDeJaneiro");
    }
  }

    return(
        <View style={styles.container}>
            <View style={styles.searchInput}>
              <FontAwesome name="search" size={24} color="black" />
              <TextInput   
                placeholderTextColor="#cccccc"
                value={query}
                placeholder="Buscar Cidade "
                onChangeText={(text) => setQuery(text)}
              />
            </View>
            <FlatList data={filteredCidade} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
              <TouchableOpacity onPress={() => entrarPaginas(item.cidade)}>
                <View style={styles.itemContainer}> 
                  <Image style={styles.image} source={Foto}/>
                  <View style={styles.textContainer}>
                    <View style={{display: "flex", justifyContent: "center", height: "100%", alignItems: "center"}}>
                      <Text style={styles.detailTextNumber}>{item.dados_meteorologicos[1].temperatura_max}°</Text>
                    </View>
                    <View>
                      <Text style={styles.detailText}>{item.cidade}</Text>
                      <Text style={styles.detailTextCondicao}>{item.dados_meteorologicos[1].condicao}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}/>
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
    itemContainer: {
      height: 100,
      flexDirection: "row",
      marginBottom: 20,
      backgroundColor: "#333333",
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: 15
    },
    image: {
      position: "relative",
      zIndex: -1,
      width: "100%"
    },
    textContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      position: "absolute",
      zIndex: 1,
      flex: 1,
      padding: 10,
    },
    titleText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
    },
    detailText: {
      color: "#dddddd",
      fontSize: 30,
      fontWeight: "700"
    },
    detailTextCondicao: {
      color: "#dddddd",
      fontSize: 20,
      fontWeight: "700"
    },
    detailTextNumber: {
      color: "#dddddd",
      fontSize: 55,
      fontWeight: "700"
    }
  });