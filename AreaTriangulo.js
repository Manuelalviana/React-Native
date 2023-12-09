import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableHighlight, Dimensions } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');



  const calcularArea = () => {
    const baseNumero = parseFloat(base);
    const alturaNumero = parseFloat(altura);

    if (!isNaN(baseNumero) && !isNaN(alturaNumero)) {
      const areaCalculada = (baseNumero * alturaNumero) / 2;
      const areaFormatada = areaCalculada.toLocaleString();
      setArea(areaFormatada);
    } else {
      setArea('Valores inválidos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Calculadora da Área do Triângulo</Text>
      
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/12/area-do-triangulo.jpg' }}
            style={[styles.image, styles.imageBorder]}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, styles.bold]}>BASE:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={base}
              onChangeText={text => setBase(text)}
              keyboardType="numeric"
              placeholder="Digite a base"
              style={[styles.input, styles.bold]}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.bold]}>ALTURA:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={altura}
              onChangeText={text => setAltura(text)}
              keyboardType="numeric"
              placeholder="Digite a altura"
              style={[styles.input, styles.bold]}
            />
          </View>
        </View>

        <TouchableHighlight
          style={styles.buttonContainer}
          underlayColor="black" // Cor de destaque ao tocar
          onPress={calcularArea}
        >
          <Text style={[styles.buttonText, styles.bold]}>Calcular Área</Text>
        </TouchableHighlight>

        <View style={styles.lineBreak}></View>

        <Text style={[styles.resultText, styles.bold, styles.areaText]}>Área: {area}</Text>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width

        const styles = StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#474444',
            height: '100%',

        },
        content: {
            flex: 1,
            backgroundColor: '#993399',
            padding: 20,
            color: 'white',
            maxWidth: 425,
            borderRadius: 10
        },
        title: {
            textAlign: 'center',
            fontSize: 20,
            marginBottom: 25,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: 10,
            fontWeight: 'bold',
        },
        imageContainer: {
            borderWidth: 2,
            borderColor: 'rgba(0, 0, 0, 0.5)',
            marginBottom: 20,
            backgroundColor: 'white',
        },
        image: {
            width: '100%',
            height: 300,
            resizeMode: 'contain',
        },
        imageBorder: {
            borderWidth: 5,
            borderColor: 'black',
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginBottom: 20,
        },
        inputContainer: {
            flex: 1,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
        },
        input: {
            paddingHorizontal: 8,
            paddingVertical: 4,
            color: 'white',
        },
        lineBreak: {
            height: 16,
        },
        label: {
            color: 'white',
            marginRight: 10,
        },
        resultText: {
            color: 'white',
        },
        bold: {
            fontWeight: 'bold',
        },
        areaText: {
            fontSize: 24,
        },
        buttonContainer: {
            backgroundColor: '#008b8b',
            borderRadius: 15, // bordas redondas
            overflow: 'hidden',
            width: '100%', // Ocupar a tela toda na horizontal
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
            padding: 20, // Espaçamento interno
        },
        });
