import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
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
            width: 200,
            marginBottom: 10
          }}
          onChangeText={goalInputHandler}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: 200 }}>
          <View style={{ width: "40%" }}>
            <Button onPress={props.onCancel} title="CANCEL" color="red" />
          </View>
          <View style={{ width: "40%" }}>
            <Button onPress={addGoalHandler} title="ADD" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
