import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({
  name,
  enthusiasmLevel = 1,
  onIncrement = () => {},
  onDecrement = () => {},
}: IProps) {
  if (enthusiasmLevel <= 0)
    throw new Error("You could be a little more enthusiastic. :D");

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="-" onPress={onDecrement} color="red" />
        </View>
        <View style={styles.button}>
          <Button title="+" onPress={onIncrement} color="blue" />
        </View>
      </View>
    </View>
  );
}

export default Hello;

/* ========================================================================= */
/* STYLES                                                                    */
/* ========================================================================= */
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: "#999",
    fontWeight: "bold",
  },
});

/* ========================================================================= */
/* HELPERS                                                                   */
/* ========================================================================= */
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
