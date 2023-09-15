import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const empresasFicticias = [
  {
    id: '1',
    nome: 'EletroFix',
    foto: 'https://static5.depositphotos.com/1006018/433/i/450/depositphotos_4336316-stock-illustration-electrician-or-power-lineman-carrying.jpg',
    avaliacao: 4.5,
  },
  {
    id: '2',
    nome: 'EletroGau',
    foto: 'https://w7.pngwing.com/pngs/218/515/png-transparent-electrician-graphics-electrical-engineering-electricity-logo-electrician-cartoon-retro-electrical-wires-cable-logo.png',
    avaliacao: 4.3,
  },
  // Adicione mais empresas fictícias aqui
];

function HomeScreen() {
  const navigation = useNavigation();
  const [servico, setServico] = useState('');
  const [userNome, setUserNome] = useState('Carlos'); 
  const [userFoto, setUserFoto] = useState('https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg'); 

  const handlePesquisar = () => {
    // Implementar a lógica de pesquisa com base no serviço inserido.
    // Por enquanto, estamos usando as empresas fictícias.
    // Neste campo ficará a lógica real de pesquisa.
  };

  const renderItem = ({ item }) => (
    <View style={styles.empresaContainer}>
      <Image source={{ uri: item.foto }} style={styles.empresaFoto} />
      <Text style={styles.empresaNome}>{item.nome}</Text>
      <Text style={styles.empresaAvaliacao}>Avaliação: {item.avaliacao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: userFoto }} style={styles.userFoto} />
        <Text style={styles.userNome}>{userNome}</Text>
      </View>
      <Text style={styles.title}>Encontre um serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o tipo de serviço (ex: eletricista)"
        value={servico}
        onChangeText={(text) => setServico(text)}
      />
      <Button title="Pesquisar" onPress={handlePesquisar} />
      <FlatList
        data={empresasFicticias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Agendar Serviço" onPress={() => navigation.navigate('Agendamento')} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  userFoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', 
  },
  input: {
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  empresaContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  empresaFoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  empresaNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', 
  },
  empresaAvaliacao: {
    fontSize: 16,
    color: '#666', 
  },
});

export default HomeScreen;
