import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignupScreen: undefined;
  DetailsScreen: {
    price: number;
    name: string;
    verified: boolean;
  };
};

export type SignupProps = NativeStackScreenProps<
  RootStackParamList,
  'SignupScreen'
>;
export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;

export type SignupScreenRouteProp = RouteProp<
  RootStackParamList,
  'SignupScreen'
>;

export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailsScreen'
>;
