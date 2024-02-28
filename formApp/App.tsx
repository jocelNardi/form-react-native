import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import Main from './src/container/Main/Main';
import NavigatorContainer from './src/navigator/NavigatorContainer';

const App: React.FC = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'light-content' : 'dark-content',
    flex: 1,
  };

  return (
    <SafeAreaView style={[backgroundStyle]}>
      <Main />
    </SafeAreaView>
  );
};

export default App;
