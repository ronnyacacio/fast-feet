import styled from 'styled-components/native';

import { Button as Btn } from '../../../components';

export const Container = styled.View`
  flex: 0.7;
`;

export const Content = styled.View`
  flex: 1;
  border: #0000001a;
`;

export const Info = styled.View`
  margin-top: 5px;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999999;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Value = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Button = styled(Btn)`
  width: 100%;

  margin-top: 20px;
`;
