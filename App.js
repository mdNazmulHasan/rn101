import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMood] = useState(false);
  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setIsAddMood(false);
    setCourseGoals(currentGoals => [...currentGoals, goalTitle]);
  };
  const removeGoalHandler = deleteIndex => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal, index) => index !== deleteIndex);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMood(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMood(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courseGoals}
        renderItem={({ item, index }) => {
          return <GoalItem title={item} onDelete={removeGoalHandler} index={index} />;
        }}
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
