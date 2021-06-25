import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ListIcon({ details }) {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewSt}>
      <View style={{ flexDirection: "column", padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="restaurant"
            size={28}
            style={styles.icon}
            onPress={() =>
              navigation.navigate("details", {
                otherParam: "Restaurant",
              })
            }
          />
          <MaterialIcons
            name="hotel"
            size={28}
            style={styles.icon}
            onPress={() =>
              navigation.navigate("details", {
                otherParam: "hotel",
              })
            }
          />
          <MaterialIcons
            name="local-hospital"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("hospital")}
          />
          <MaterialIcons
            name="local-cafe"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("cafe")}
          />
          <MaterialIcons
            name="local-library"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("library")}
          />
          <MaterialIcons
            name="local-cafe"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("restaurant")}
          />
          <MaterialIcons
            name="local-library"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("restaurant")}
          />
          <MaterialIcons
            name="local-cafe"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("restaurant")}
          />
          <MaterialIcons
            name="local-library"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("restaurant")}
          />
          <MaterialIcons
            name="local-cafe"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("restaurant")}
          />
          <MaterialIcons
            name="local-library"
            size={28}
            style={styles.icon}
            onPress={(val) => pressHandler("restaurant")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titre}>Food</Text>
          <Text style={styles.titre}>Hotel</Text>
          <Text style={styles.titre}>Hopital</Text>
          <Text style={styles.titre}>Cafe</Text>
          <Text style={styles.titre}>Biblio</Text>
          <Text style={styles.titre}>Cafe</Text>
          <Text style={styles.titre}>Biblio</Text>
          <Text style={styles.titre}>Cafe</Text>
          <Text style={styles.titre}>Biblio</Text>
          <Text style={styles.titre}>Cafe</Text>
          <Text style={styles.titre}>Biblio</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  icon: {
    paddingTop: 15,
    flex: 1,
    color: "#FA8A8A",
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 40,
    width: 55,
    height: 55,
  },
  titre: {
    flex: 1,
    color: "white",
    textAlign: "center",
    marginLeft: 10,
    width: 50,
  },
  scrollViewSt: {
    paddingLeft: 20,
  }
});
