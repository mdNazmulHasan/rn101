import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    console.log(enteredGoal);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={enteredGoal}
        placeholder="Course goal"
        style={{ borderColor: "black", borderWidth: 1, padding: 10, flex: 1 }}
        onChangeText={goalInputHandler}
      />
      <Button onPress={addGoalHandler} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
