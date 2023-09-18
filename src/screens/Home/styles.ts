import styled from 'styled-components/native';
import { white } from '../../utils/Colors/Colors'

export const Container = styled.View`
  margin-top: 60px;
`;

export const WrapperTop = styled.View`
  background: #112631;
  border-radius: 24px 24px 0 0;
  height: 40px;
`;

export const WrapperScroll = styled.ScrollView`
  background: #112631;
`;

export const Title = styled.Text`
  width: 100%;
  color: ${ white };
  font-size: 28px;
  padding: 40px 10px;
  margin: 10px 0;
  text-align: center;
`;