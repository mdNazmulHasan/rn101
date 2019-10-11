import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <TextInput
          value={enteredGoal}
          placeholder="Course goal"
          style={{ borderColor: "black", borderWidth: 1, padding: 10, width: 200 }}
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add" />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View
            style={{
              padding: 10,
              backgroundColor: "#ccc",
              borderColor: "black",
              borderWidth: 1,
              marginVertical: 10
            }}
          >
            <Text>{itemData.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: "space-around"
  }
});
