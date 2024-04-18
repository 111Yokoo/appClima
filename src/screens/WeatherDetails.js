import { View, Text , Image, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fundo from "../assets/fundoClimaNublado.png";
import PrevisaoDias from "../components/PrevisaoDias";

export default function WeatherDetails({route}){
  
  const navigation = useNavigation();
  const {cidade} = route.params;

    return(
        <View style={styles.container}>
            <Image source={Fundo}  style={{height: "100%", width: "100%", zIndex: -1, position: "relative"}}/>
            <View style={styles.conatinerCidade}>
              <View>
                <Text style={styles.textTitle}>
                    {cidade.dados_meteorologicos[1].temperatura_max}°
                </Text>
                <Text style={styles.textTitleCondicao}>
                  {cidade.dados_meteorologicos[1].condicao}
                </Text>
              </View>
              <View style={styles.containerDias}>
              <FlatList keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
                <PrevisaoDias item={item}/>
              )}/>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  conatinerCidade:{
    paddingHorizontal: 10,
    height: "100%",
    position: "absolute",
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
    color: "#fff",
    textAlign: "center"
  },
  containerDias:{
    backgroundColor:"rgba(0,0,0,0.4)",
    borderRadius: 15,
    padding: 20,
    marginVertical: 50,
    width: 350
  }
  });