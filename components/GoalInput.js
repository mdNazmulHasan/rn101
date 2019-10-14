import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={props.visible}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <TextInput
          value={enteredGoal}
          placeholder="Course goal"
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: 200
          }}
          onChangeText={goalInputHandler}
        />
        <Button onPress={() => props.onAddGoal(enteredGoal)} title="Add" />
      </View>
    </Modal>
  );
};

export default GoalInput;
