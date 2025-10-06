import { useState } from 'react';
import { SafeAreaView, Text, View, Pressable } from 'react-native';
import { myColors } from './src/styles/colors';
import { Styles } from './src/styles/globalStyles';
import { ThemeContext } from './src/styles/themeContext';
import Keyboard from './src/components/keyboard';
import Converter from './src/components/converter';

export default function App() {
  const [theme] = useState('dark');
  const [mode, setMode] = useState<'calculator' | 'converter'>('calculator');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: myColors.dark }}>
        <View style={{ position: 'absolute', top: 60, left: 24, zIndex: 1 }}>
          <Text style={Styles.titleText}>
            {mode === 'calculator' ? 'Calculator' : 'Unit Converter'}
          </Text>
        </View>

        <View style={{ position: 'absolute', top: 56, right: 24, zIndex: 1 }}>
          <Pressable
            style={Styles.toggleButton}
            onPress={() => setMode(mode === 'calculator' ? 'converter' : 'calculator')}
          >
            <Text style={Styles.toggleButtonText}>
              {mode === 'calculator' ? 'Convert' : 'Calculate'}
            </Text>
          </Pressable>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
          {mode === 'calculator' ? <Keyboard /> : <Converter />}
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}