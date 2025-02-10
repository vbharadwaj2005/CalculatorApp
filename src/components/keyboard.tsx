import * as React from "react";
import Button from "./button";
import { View, Text, ScrollView } from "react-native";
import { Styles } from "../styles/globalStyles";
import { myColors } from "../styles/colors";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<string | null>(null);
  const [history, setHistory] = React.useState<string[]>([]);
  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };
  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };
  const clearHistory = () => {
    setHistory([]);
  };
  const getResult = () => {
    let computation = 0;
    switch (operation) {
      case "+":
        computation = parseFloat(secondNumber) + parseFloat(firstNumber);
        break;
      case "-":
        computation = parseFloat(secondNumber) - parseFloat(firstNumber);
        break;
      case "*":
        computation = parseFloat(secondNumber) * parseFloat(firstNumber);
        break;
      case "/":
        computation = parseFloat(secondNumber) / parseFloat(firstNumber);
        break;
      default:
        computation = 0;
    }
    const historyEntry = `${secondNumber} ${operation} ${firstNumber} = ${computation}`;
    setHistory([historyEntry, ...history]);
    setResult(computation.toString());
    setFirstNumber(computation.toString());
    setSecondNumber("");
    setOperation("");
  };
  return (
    <View style={Styles.viewBottom}>
      <ScrollView style={Styles.historyContainer}>
        {history.map((entry, index) => (
          <Text key={index} style={Styles.historyText}>{entry}</Text>
        ))}
      </ScrollView>
      <View style={{ height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center" }}>
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: myColors.white, fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
      </View>
      <View style={Styles.resultContainer}>
        <Text style={Styles.resultText}>
          {firstNumber || "0"}
        </Text>
      </View>
      <View style={Styles.row}>
        <Button title="C" onPress={clear} />
        <Button title="HClr" onPress={clearHistory} />
        <Button title="%" onPress={() => handleOperationPress("%")} />
        <Button title="÷" onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="=" onPress={() => getResult()} />
      </View>
    </View>
  );
}