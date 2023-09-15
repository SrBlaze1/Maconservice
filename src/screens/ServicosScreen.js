import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ServicosScreen() {
  const navigation = useNavigation();

  const handleAgendarServico = () => {
    // Navegar para a tela de agendamento
    navigation.navigate('Agendamento');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços Disponíveis</Text>
      <Text>Aqui você pode listar os serviços disponíveis ou categorias.</Text>
      <Button title="Agendar Serviço" onPress={handleAgendarServico} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ServicosScreen;

