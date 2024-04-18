import { Text, TouchableOpacity, StyleSheet} from "react-native";

export default function Button({ title, onPress, color}){
    return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{ color: color, fontSize: 20, fontWeight: "700"}}>
        {title}
      </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1D2295",
    width: 250,
    height: 40,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

