import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
