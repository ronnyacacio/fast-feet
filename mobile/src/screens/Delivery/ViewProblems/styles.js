import styled from 'styled-components/native';

export const Container = styled.View``;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: #0000001a;
  border-radius: 4px;

  padding: 20px;
  margin-top: 18px;
`;

export const DescriptionContainer = styled.View`
  max-width: 80%;
  flex-wrap: wrap;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
