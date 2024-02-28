import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const DetailsScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;
