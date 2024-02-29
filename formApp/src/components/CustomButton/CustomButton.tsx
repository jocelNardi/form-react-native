import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Text } from 'react-native-paper';

interface ICustomButton extends TouchableOpacityProps {
  Label: string;
  labelStyle?: StyleProp<TextStyle>;
}
const CustomButton: React.FC<ICustomButton> = props => {
  return (
    <TouchableOpacity {...props}>
      <Text style={props.labelStyle}>{props.Label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
