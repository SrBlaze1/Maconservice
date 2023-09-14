import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

function CadastroScreen() {
  const navigation = useNavigation();
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [foto, setFoto] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);

  useEffect(() => {
    // Solicitar permissão para acessar a câmera e a galeria de fotos
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para acessar a câmera e a galeria de fotos.');
      }
    })();

    // Solicitar permissão para acessar a localização
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para acessar a localização.');
      } else {
        const location = await Location.getCurrentPositionAsync({});
        setLocalizacao(location);
      }
    })();
  }, []);

  const handleCadastro = () => {
    // Implementar a lógica de criação de conta, incluindo
    // o envio do nome de usuário, e-mail, senha, foto e localização para o servidor.
    // Após o cadastro, navegue para a tela de Login.
    navigation.navigate('Login');
  };

  const handleEscolherFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  const handleTirarFoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie uma conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={nomeUsuario}
        onChangeText={(text) => setNomeUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir senha"
        secureTextEntry
        value={repetirSenha}
        onChangeText={(text) => setRepetirSenha(text)}
      />
      <Text style={styles.subtitle}>Escolher uma foto de perfil:</Text>
      {foto && <Image source={{ uri: foto }} style={styles.foto} />}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleEscolherFoto} style={styles.fotoButton}>
          <MaterialIcons name="image" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Escolher Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTirarFoto} style={styles.fotoButton}>
          <MaterialIcons name="camera-alt" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Localização:</Text>
      {localizacao && (
        <Text style={styles.localizacao}>
          Latitude: {localizacao.coords.latitude}, Longitude: {localizacao.coords.longitude}
        </Text>
      )}
      <TouchableOpacity onPress={handleCadastro} style={styles.cadastrarButton}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
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
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  fotoButton: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  foto: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    marginTop: 10,
  },
  localizacao: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  cadastrarButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
});

export default CadastroScreen;
