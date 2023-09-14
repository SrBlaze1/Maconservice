import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AgendamentoScreen({ route }) {
  const navigation = useNavigation();
  const [endereco, setEndereco] = useState('Endereço Fictício, 123');
  const [complemento, setComplemento] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const handleAgendar = () => {
    // Coloque a lógica de agendamento do serviço com a empresa selecionada aqui.

    // Exemplo de redirecionamento após o agendamento:
    navigation.navigate('ListaAgendamentos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Serviço</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
          editable={false} // Impede a edição do campo
        />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          value={complemento}
          onChangeText={(text) => setComplemento(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Data (ex: 01/09/2023)"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hora (ex: 09:00)"
          value={hora}
          onChangeText={(text) => setHora(text)}
        />
      </View>
      <Button title="Agendar" onPress={handleAgendar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default AgendamentoScreen;
