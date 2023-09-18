import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import CardLinearGradient from '../CardLinearGradient';
import { blue1, green1 } from '../../utils/Colors/Colors'

function Header() {
  return (
    <Container>
      <CardLinearGradient
        // colors={[blue1, green1]}
        colors={['#fd8477', '#dd4a67']}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 3}}
        // locations={[0,0.1,0.6]}
        style={{
          flex: 1
        }} 
      >
        <Text>Header</Text>
      </CardLinearGradient>
    </Container>
  );
}

export default Header;
