import { useState , useEffect} from "react";
import { View, Text , Image, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import Foto from '../assets/nublado.png'
import { useNavigation } from "@react-navigation/native";

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
      navigation.navigate("SaoPaulo");
    }
    if(cidade == "Rio de Janeiro"){
      navigation.navigate("RioDeJaneiro");
    }
  }

    return(
        <View style={styles.container}>
            <Text>
                teste
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
  });