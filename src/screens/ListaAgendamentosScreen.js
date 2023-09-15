import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dados fictícios de agendamentos
const agendamentosFicticios = [
  {
    id: '1',
    empresa: {
      nome: 'EletroFix',
      foto: 'https://www.zarla.com/images/zarla-eletrifix-1x1-2400x2400-20210609-w9vfgdymtrv7chtrd6h6.png?crop=1:1,smart&width=250&dpr=2',
    },
    data: '01/09/2023',
    hora: '09:00',
  },
  {
    id: '2',
    empresa: {
      nome: 'EletroGau',
      foto: 'https://w7.pngwing.com/pngs/218/515/png-transparent-electrician-graphics-electrical-engineering-electricity-logo-electrician-cartoon-retro-electrical-wires-cable-logo.png',
    },
    data: '02/09/2023',
    hora: '14:30',
  },
  // Adicionar mais agendamentos fictícios aqui
];

function ListaAgendamentosScreen() {
  const navigation = useNavigation();
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    // Implementar a lógica para buscar os agendamentos do servidor.
    // Por enquanto, estou usando os dados fictícios.
    setAgendamentos(agendamentosFicticios);
  }, []);

  const handleDetalhes = (agendamento) => {
    // Implementar a navegação para a tela de detalhes do agendamento
    navigation.navigate('DetalhesAgendamento', { agendamento });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDetalhes(item)}>
      <View style={styles.agendamentoContainer}>
        <View style={styles.empresaContainer}>
          <Text style={styles.empresaNome}>{item.empresa.nome}</Text>
          <Text style={styles.empresaDataHora}>
            Data: {item.data} - Hora: {item.hora}
          </Text>
        </View>
        {/* Exibir a foto da empresa aqui */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos</Text>
      <FlatList
        data={agendamentos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  agendamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  empresaContainer: {
    flex: 1,
  },
  empresaNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  empresaDataHora: {
    fontSize: 16,
  },
});

export default ListaAgendamentosScreen;
