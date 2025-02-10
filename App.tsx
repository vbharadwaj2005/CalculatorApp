import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { myColors } from './src/styles/colors';
import { ThemeContext } from './src/styles/themeContext';
import Keyboard from './src/components/keyboard';

export default function App() {
  const [theme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: myColors.dark, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}