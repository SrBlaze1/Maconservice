import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ServicosScreen from './src/screens/ServicosScreen';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import AgendamentoScreen from './src/screens/AgendamentoScreen';
import ListaAgendamentosScreen from './src/screens/ListaAgendamentosScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
      <Stack.Screen name="ListaAgendamentos" component={ListaAgendamentosScreen} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Serviços" component={ServicosScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="MainTab" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
