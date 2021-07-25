import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./src/components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/*Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/*This is where the tasks will go!*/}
          <Task text="Task1" />
          <Task text="Task2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  items: {
    marginTop: 30,
  },
});
