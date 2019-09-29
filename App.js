import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      <TextInput placeholder="Course goal" style={{borderColor:'black',borderWidth:1,padding:10}}/>
      <Button
        onPress={() => setOutputText("Text changed!")}
        title="Add"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    padding:30
  }
});
