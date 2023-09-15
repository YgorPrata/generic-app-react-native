import styled from 'styled-components/native';
import { gray80, gray300, white } from '../../utils/Colors/Colors'

export const Container = styled.View`
  padding: 10px 15px 15px 15px;
  background: ${ white };
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const MenuWrapper = styled.View`
  background: ${ gray80 };
  color: ${ gray300 };
  height: 54px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const CircleCard = styled.View`
  border-radius: 30px;
  background: ${props => props.isActive ? 'red' : 'green'};
  margin: ${props => props.isActive ? '-6px 12px 0 12px' : '0 12px'};
  padding: ${props => props.isActive ? '10px' : '8px'};
`;