import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Camera } from 'expo-camera';

import api from '../../../services/api';
import useAuth from '../../../hooks/useAuth';
import { WrapperDelivery } from '../../../components';
import {
  Container,
  Button,
  CameraContent,
  ButtonPicture,
  IconCamera,
  Img,
  ButtonClose,
  IconClose,
} from './styles';

export default function Confirm() {
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraActive, setCameraActive] = useState(true);

  const camRef = useRef(null);

  const navigation = useNavigation();
  const route = useRoute();
  const { delivery_id } = route.params;

  const { deliveryman } = useAuth();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert(
          'Oooops',
          'Precisamos da sua permissão para acessar a sua câmera!'
        );
      }
    })();
  }, []);

  async function handleTakePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setPhoto(data);
      setCameraActive(false);
    }
  }

  async function handleConfirmDelivery() {
    if (cameraActive) {
      Alert.alert(
        'Oooops!',
        'Tire uma foto da assinatura para confirmar a entrega!'
      );
      return;
    }

    try {
      const data = new FormData();

      data.append('file', {
        uri: photo.uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      const {
        data: { id },
      } = await api.post('files', data);

      await api.put(
        `deliveryman/${deliveryman.id}/delivery/${delivery_id}/finish`,
        { signature_id: id }
      );

      Alert.alert('Sucesso', 'A confirmação de entrega do produto foi feita!');
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert('Falha', 'Ocorreu um erro inesperado, tente novamente!');
    }
  }

  if (hasPermission === null) return <View />;

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <WrapperDelivery>
      <Container>
        {cameraActive ? (
          <Camera style={{ flex: 1, marginBottom: 10 }} ref={camRef}>
            <CameraContent>
              <ButtonPicture onPress={handleTakePicture}>
                <IconCamera />
              </ButtonPicture>
            </CameraContent>
          </Camera>
        ) : (
          <Img source={{ uri: photo.uri }}>
            <ButtonClose onPress={() => setCameraActive(true)}>
              <IconClose />
            </ButtonClose>
          </Img>
        )}
        <Button color="#7d40e3" onPress={handleConfirmDelivery}>
          Enviar
        </Button>
      </Container>
    </WrapperDelivery>
  );
}
