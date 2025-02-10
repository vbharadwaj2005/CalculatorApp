import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/colors';
import { ThemeContext } from './src/styles/themeContext';
import Keyboard from './src/components/keyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.dark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});