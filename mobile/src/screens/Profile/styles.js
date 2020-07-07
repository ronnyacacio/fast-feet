import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Img = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  background: #000;
`;

export const Info = styled.View`
  width: 85%;
  margin: 50px 0 20px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Description = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;

  margin-bottom: 10px;
`;
