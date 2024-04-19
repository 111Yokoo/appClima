import { View, Text , Image, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import Mapa from "../assets/Mapa.png";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function Map(){
    const navigation = useNavigation();
    return(
        <ImageBackground source={Mapa} style={{flex: 1, resizeMode: 'cover', justifyContent: "flex-end"}}>
            <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")} style={styles.buttonBack}>
                <Text style={{fontSize: 20, fontWeight: "700"}}>
                <Ionicons name="arrow-back-sharp" size={24} color="#000" />
                </Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        
    },
    buttonBack:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
    }
  });