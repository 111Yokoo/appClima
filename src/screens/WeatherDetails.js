import { View, Text , Image, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WeatherDetails({route}){
  
  const navigation = useNavigation();
  const {cidade} = route.params;

    return(
        <View style={styles.container}>
            <View>
              <Text>
                  {cidade.dados_meteorologicos[1].temperatura_max}°
              </Text>
              <Text>
                {cidade.dados_meteorologicos[1].condicao}
              </Text>
            </View>
            <View>

            </View>
            <View>
              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
  });