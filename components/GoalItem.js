import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

const GoalItem = props => {
  console.log(props.title);
  return (
    <TouchableHighlight onPress={props.onDelete.bind(this, props.index)}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#ccc",
          borderColor: "black",
          borderWidth: 1,
          marginVertical: 10
        }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default GoalItem;
