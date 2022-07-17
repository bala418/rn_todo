import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

const Form = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a new todo"
        onChangeText={changeHandler}
      />
      <View style={styles.button}>
        <Button onPress={() => submitHandler(text)} title="Add" color="coral" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 4,
    fontSize: 16,
    color: "#333",
  },
});

export default Form;
