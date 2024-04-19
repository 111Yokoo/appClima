import { Text, StyleSheet, View, Image} from "react-native";

export default function PrevisaoDias({item}){
    return(
      <View style={styles.temps}>
      <View>
        <Text style={{color: "#fff", fontWeight: "500", fontSize: 18}}>{item.data}</Text>
      </View>
      <View style={styles.tempDiference}>
        <Text style={{color: "#EBFF00", fontWeight: "500", fontSize: 18}}>{item.temperatura_min}</Text>
        <Text style={{color: "#EBFF00", fontWeight: "500", fontSize: 18}}>---------------</Text>
        <Text style={{color: "#F07540", fontWeight: "500", fontSize: 18}}>{item.temperatura_max}</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  temps: {
    display: "flex",
    flexDirection: "row",
    gap: 70,
    marginVertical: 5,
  },
  tempDiference: {
    display: "flex",
    flexDirection: "row",
    gap: 5
  }
});

