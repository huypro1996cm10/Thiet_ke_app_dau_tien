import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Personal Information
      </Text>
      <Text style={styles.paragraph}>
       Name: Tran Quang Huy
      </Text>
      <Text style={styles.paragraph}>
       Phone number: 0947710012
      </Text>
      <Text style={styles.paragraph}>
       Student ID: 220501710
      </Text>
      <Text style={styles.paragraph}>
       Email: svngheovk2003@gmail.com
      </Text>
      <Text style={styles.paragraph}>
       Hobbies: play sport, listen to music,...
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
