import { Text, TouchableOpacity, StyleSheet, View, Image} from "react-native";
import Foto from '../../assets/nublado.png'
import { useNavigation } from "@react-navigation/native";

export default function MyButtonCidade({cidade}){
  const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("WeatherDetails", {cidade: cidade})}>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={Foto} />
          <View style={styles.textContainer}>
            <View style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
              <Text style={styles.detailTextNumber}>{cidade.dados_meteorologicos[1].temperatura_max}°</Text>
            </View>
            <View>
              <Text style={styles.detailText}>{cidade.cidade}</Text>
              <Text style={styles.detailTextCondicao}>{cidade.dados_meteorologicos[1].condicao}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

