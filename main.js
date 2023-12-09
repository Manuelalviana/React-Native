import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
  const [inputValueA, setInputValueA] = useState("0");
  const [operation, setOperation] = useState("and");
  const [inputValueB, setInputValueB] = useState("0");
  const [result, setResult] = useState("");

  const calculate = () => {
    const inputValueANum = parseInt(inputValueA, 10);
    let calculatedResult;

    if (operation === "not") {
      setInputValueB("0");
    }

    switch (operation) {
      case "and":
        calculatedResult =
          inputValueANum && parseInt(inputValueB, 10) ? "Verdadeiro" : "Falso";
        break;
      case "or":
        calculatedResult =
          inputValueANum || parseInt(inputValueB, 10) ? "Verdadeiro" : "Falso";
        break;
      case "xor":
        calculatedResult =
          (inputValueANum || parseInt(inputValueB, 10)) &&
          !(inputValueANum && parseInt(inputValueB, 10))
            ? "Verdadeiro"
            : "Falso";
        break;
      case "nand":
        calculatedResult = !(inputValueANum && parseInt(inputValueB, 10))
          ? "Verdadeiro"
          : "Falso";
        break;
      case "nor":
        calculatedResult =
          inputValueANum ^ parseInt(inputValueB, 10) ? "Falso" : "Verdadeiro";
        break;
      case "xnor":
        calculatedResult =
          inputValueANum ^ parseInt(inputValueB, 10) ? "Verdadeiro" : "Falso";
        break;
      case "not":
        calculatedResult = inputValueANum === 0 ? "Verdadeiro" : "Falso";
        break;
      default:
        calculatedResult = "Operação não reconhecida";
        break;
    }

    setResult(`Resultado: ${calculatedResult}`);
  };

  return (
    <View style={styles.container}>
      <Text style={[commonStyle, styles.headerTitle]}> Calculadora </Text>
      <Text style={[commonStyle, styles.headerSubtitle]}> Portas Lógicas </Text>
      <View style={styles.form}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={inputValueA}
            onValueChange={(itemValue) => setInputValueA(itemValue)}
          >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={operation}
            onValueChange={(itemValue) => {
              setOperation(itemValue);
              if (itemValue === "not") {
                setInputValueB("0");
              }
            }}
          >
            <Picker.Item label="AND" value="and" />
            <Picker.Item label="OR" value="or" />
            <Picker.Item label="XOR" value="xor" />
            <Picker.Item label="NAND" value="nand" />
            <Picker.Item label="NOR" value="nor" />
            <Picker.Item label="XNOR" value="xnor" />
            <Picker.Item label="NOT" value="not" />
          </Picker>
          {operation !== "not" && ( // Codigo para a Renderização se a operação não for 'not'
            <Picker
              style={styles.picker}
              selectedValue={inputValueB}
              onValueChange={(itemValue) => setInputValueB(itemValue)}
            >
              <Picker.Item key={0} label="0" value="0" />
              <Picker.Item key={1} label="1" value="1" />
            </Picker>
          )}
        </View>
      </View>

      <TouchableOpacity onPress={calculate} style={[btn, styles.btnCalculate]}>
        <Text style={styles.btnCalculateText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={[styles.result, commonStyle]}>{result}</Text>
    </View>
  );
};

const commonStyle = {
  color: "white",
  letterSpacing: 0.8,
  marginLeft: 10,
  marginRight: 10,
};

const btn = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: 150,
  padding: 20,
  margin: 5,
  borderWidth: 1,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(33, 150, 243)",
  },
  headerTitle: {
    justifyContent: "center",
    marginBottom: 2,
    fontSize: 20,
  },
  headerSubtitle: {
    fontSize: 32,
    marginBottom: 26,
    fontWeight: "bold",
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
  },
  picker: {
    margin: 8,
    width: "100%",
    height: 50,
    backgroundColor: "white",
  },
  pickerContainer: {
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 6,
  },
  btnCalculate: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "rgb(19 123 205)",
    elevation: 5, // sombra no android
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)", // sombra ao redor da caixa
    // Config. Sombra p/ IOS
    shadowColor: "black", // escolhendo a cor da sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  btnCalculateText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "rgb(33, 150, 243)",
    textTransform: "uppercase",
    fontSize: 16,
  },
  result: {
    marginTop: 25,
    fontSize: 24,
  },
});

export default App;
