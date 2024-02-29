import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

type MyTextInputProps = React.ComponentProps<typeof TextInput>;

const CustomInput: React.FC<MyTextInputProps> = props => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <TextInput {...props} />
    </View>
  );
};

export default CustomInput;
