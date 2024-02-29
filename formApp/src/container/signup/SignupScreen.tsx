import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInputText/CustomInput';

const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const navigate = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <View>
        <Text variant="headlineLarge">{"Formulaire d'achat"}</Text>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <CustomInput
          label={'Email'}
          mode="outlined"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          label={'name'}
          accessibilityLabel="name"
          placeholder="Nom de la personne"
          mode="outlined"
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          label={'firstname'}
          accessibilityLabel="firstname"
          mode="outlined"
          value={firstname}
          onChangeText={setFirstname}
        />
      </View>
      <CustomButton
        Label="Soumettre"
        accessibilityRole="button"
        style={{
          alignItems: 'center',
          backgroundColor: 'blue',
          width: '100%',
          borderRadius: 16,
          marginVertical: 5,
          padding: 20,
        }}
        labelStyle={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
        onPress={() => {
          navigate.navigate('DetailsScreen');
        }}
      />
    </View>
  );
};

export default SignupScreen;
