import { View, Text , Image, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WeatherDetails({route}){
  
  const navigation = useNavigation();
  const {cidade} = route.params;

    return(
        <View style={styles.container}>
            <Text>
                {cidade.cidade}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
  });