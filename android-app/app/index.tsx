import { Text, PermissionsAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CallLogs from 'react-native-call-log';

export default async function Index() {


  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="dark" />

      <Text>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}
