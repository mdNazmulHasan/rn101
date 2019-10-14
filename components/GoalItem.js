import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
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
    </TouchableOpacity>
  );
};

export default GoalItem;
