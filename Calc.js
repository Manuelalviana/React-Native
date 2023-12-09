import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const calculate = () => {
    let response;

    // Regex - valida o que foi digitado
    const validNumber = (text) => {
      return /^(\d{1,3}(\.\d{3})*(,\d+)?|\d+(,\d+)?)$/.test(text);
    }
      // Encerra ou continua a execução
      if (!validNumber(number1) || !validNumber(number2)) {
        response = "Informe apenas números. Use (.) como separador de milhar e (,) para decimais"
        setResult(response);
        return;
    }

    const n1 = parseFloat(number1.replace(/\./g, "").replace(",", "."));
    const n2 = parseFloat(number2.replace(/\./g, "").replace(",", "."));
    
    switch (operation) {
      case "add":
        response = n1 + n2;
        break;
      case "sub":
        response = n1 - n2;
        break;
      case "mult":
        response = n1 * n2;
        break;
      case "div":
        if (n2 !== 0) {
          response = n1 / n2;          
        } else {
          response = "Impossível dividir por 0";
        }
        break;
      case "mod":
        if (n2 !== 0) {
          response = n1 % n2;
        } else {
          response = "Impossível calcular o módulo de uma divisão por 0"
        };
        break;
      case "expo":
        response = Math.pow(n1, n2);
        break;
      default:
        response = "Operação Inválida";
    }
    showResult(response);
  };

  // Limpa os inputs tela
  const clear = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
  }

  // Mostra o resultado
  const showResult = (response) => {
    if (typeof (response) === "number") {
      if (!isNaN(response)) {
        const formattedResult = response.toFixed(2).toString().replace(".", ",");
        setResult(formattedResult);
      } else {
        response = "Informe apenas valores válidos! Não textos"
        setResult(response);
      }
    } else {
      setResult(response)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Calculadora JavaScript
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Number 1"
        value={number1}
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
      />

      <Text style={styles.inputsLegends}> 
        Informe apenas números e (,) para decimais
      </Text>

      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}
          selectedValue={operation}
          onValueChange={(itemValue) => setOperation(itemValue)}
        >
          <Picker.Item label="Adição" value="add" />
          <Picker.Item label="Subtração" value="sub" />
          <Picker.Item label="Multiplicação" value="mult" />
          <Picker.Item label="Divisão" value="div" />
          <Picker.Item label="Módulo" value="mod" />
          <Picker.Item label="Exponenciação" value="expo" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Number 2"
        value={number2}
        onChangeText={(text) => setNumber2(text)}
        keyboardType="numeric"
      />

      <Text style={styles.inputsLegends}> 
        Informe apenas números e (,) para decimais
      </Text>
      <TouchableOpacity className="bt calculate" onPress={() => calculate()} style={[styles.bt, styles.btCalculate]}>
        <Text style={styles.btCalculateText}> Calcular </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bt clear" onPress={() => clear()} style={[styles.bt, styles.btClear]}>
        <Text style={styles.btCalculateText}> Limpar </Text>
      </TouchableOpacity>

      {/* Esconde o componente vazio */}
      {result !=="" && (
      <Text style={styles.result}>
        Resultado: {result}
      </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
  },
  header: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 60,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',    
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 3,
    borderRadius: 10
  },
  inputsLegends: {
    color: "rgb(79, 189, 92)",
    marginBottom: 15,
    fontSize: 12,
    letterSpacing: .5,
    // color: '#fff',
  },
  pickerContainer: {
    width: 200,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden'
  },
  picker: {
    width: '100%', 
    height: '100%',
    borderWidth: 1,
    backgroundColor: "rgb(25, 140, 23)",
    color: "#fff"
  },
  bt: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 150,
    padding: 20,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    color: "#fff",
  },
  btCalculate: {
    backgroundColor: "rgb(25, 140, 23)",
  },
  btClear: {
    backgroundColor: "rgb(57 75 73)",
  },
  btCalculateText: {
    textAlign: 'center',
    fontWeight: "bold",
    color: '#fff',
    textTransform: "uppercase",
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    padding: 30,
    margin: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgb(25, 140, 23)"
  },
});

export default Calculator;
