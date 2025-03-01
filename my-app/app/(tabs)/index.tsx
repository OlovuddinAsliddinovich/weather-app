import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={{ textAlign: "center" }}>1242</Text>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "yellow",
  },
  box2: {
    flex: 4,
    backgroundColor: "blue",
  },
  box3: {
    backgroundColor: "green",
    flex: 1,
  },
});
