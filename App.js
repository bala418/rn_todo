import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import Form from "./components/Form";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Learn FlatList", key: "2" },
    { text: "Learn Flexbox", key: "3" },
    { text: "Learn Context API", key: "4" },
    { text: "Learn Hooks", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      console.log(key);
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ]);
    } else {
      Alert.alert("OOPS", "Please enter atleast 3 characters", [
        { text: "Undertstood", onPress: () => {} },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismiss");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem
                  item={item}
                  pressHandler={pressHandler}
                  submitHandler={submitHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
