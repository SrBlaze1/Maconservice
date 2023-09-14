import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar a lógica de autenticação.
    // Por enquanto, vou apenas navegar para a tela MainTab.
    navigation.navigate('MainTab'); 
  };
  

  const handleCadastro = () => {
    // Navegar para a tela de cadastro
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou email"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.signupLink} onPress={handleCadastro}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  signupLink: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
