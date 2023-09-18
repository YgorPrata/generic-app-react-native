import styled from 'styled-components/native';
import { gray80, gray300, white } from '../../utils/Colors/Colors'

export const Container = styled.View`
  padding: 10px 15px 15px 15px;
  background: #112631;
  position: absolute;
  width: 100%;
  bottom: 0;
`;
export const WrapperCircleCard = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CircleCard = styled.View`
  border-radius: 30px;
  padding: 12px;
  ${props => props.isActive && 'background: #e55672'};
`;