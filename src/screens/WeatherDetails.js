import { View, Text , Image, TouchableOpacity, StyleSheet, TextInput, FlatList, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import Fundo from "../assets/fundoClimaNublado.jpg";
import PrevisaoDias from "../components/PrevisaoDias";

export default function WeatherDetails({route}){  
  const navigation = useNavigation();
  const {cidade} = route.params;
    return(
      <ImageBackground source={Fundo} style={{flex: 1, resizeMode: 'cover', justifyContent: "center"}}>
        <View style={styles.container}>
            <View style={styles.conatinerCidade}>
              <View style={{backgroundColor: "rgb"}}>
                <Text style={styles.textTitle}>
                    {cidade.dados_meteorologicos[1].temperatura_max}°
                </Text>
                <Text style={styles.textTitleCondicao}>
                  {cidade.dados_meteorologicos[1].condicao}
                </Text>
                <Text style={styles.textTitleCondicaoCidade}>
                  {cidade.cidade}
                </Text>
                
              </View>
              <View style={styles.containerInfo}>
                  <Text style={styles.textDetails}>Velocidade do vento: {cidade.dados_meteorologicos[1].velocidade_vento}Km/h</Text>
                  <Text style={styles.textDetails}>Direção do vento: {cidade.dados_meteorologicos[1].direcao_vento}</Text>
                  <Text style={styles.textDetails}>Umidade do ar: {cidade.dados_meteorologicos[1].umidade}%</Text>
                  <Text style={styles.textDetails}>Probabilidade de precipitação: {cidade.dados_meteorologicos[1].probabilidade_precipitacao}%</Text>
              </View>
              <View style={styles.containerDias}>
              <FlatList data={cidade.dados_meteorologicos} keyExtractor={(item) => item.dados_meteorologicos} renderItem={({item}) => (
                <PrevisaoDias item={item}/>
              )}/>
              </View>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                <TouchableOpacity  onPress={() => navigation.navigate("Search")}>
                  <FontAwesome name="bars" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  conatinerCidade:{
    paddingHorizontal: 10,
    height: "100%",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  textTitle: {
    fontSize: 130,
    color: "#fff",
    textAlign: "center"
  },
  textTitleCondicao: {
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    fontWeight: "800"
  },
  containerDias:{
    backgroundColor:"rgba(0,0,0,0.7)",
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    width: 350
  },
  containerInfo:{
    backgroundColor:"#rgba(0,0,0,0.7)",
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
    width: 350,
  },
  textDetails: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  } ,
  textTitleCondicaoCidade:{
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
    marginTop: 15
  }
  });