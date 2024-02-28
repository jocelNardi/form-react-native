import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const SignupScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text>Formulaire d'achat</Text>
      </View>
    </View>
  );
};

export default SignupScreen;
