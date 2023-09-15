import styled from 'styled-components/native';
import { gray300, white } from '../../utils/Colors/Colors'

export const Container = styled.View`
  margin-top: 60px;
`;

export const WrapperTop = styled.View`
  background: ${ white };
  border-radius: 24px 24px 0 0;
  height: 40px;
`;

export const WrapperScroll = styled.ScrollView`
  background: ${ white };
`;

export const Title = styled.Text`
  width: 100%;
  color: ${ gray300 };
  font-size: 28px;
  padding: 40px 10px;
  margin: 10px 0;
  text-align: center;
`;