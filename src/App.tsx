import React from 'react';
import {
  //   SafeAreaView,
  // ScrollView,
  //   StatusBar,
  //   StyleSheet,
  //   useColorScheme,
  Text
} from 'react-native';
import { Container } from './styles';
import Home from './screens/Home';
import Menu from './components/Menu';
import Header from './components/Header';

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Menu />
    </Container>
  );
}
