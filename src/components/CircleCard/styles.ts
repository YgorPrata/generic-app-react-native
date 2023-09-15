import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 30px;
  background: ${props => props.backgroundColor};
  padding: ${props => props.padding};
`;