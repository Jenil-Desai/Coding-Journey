import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Image,
  useColorScheme,
} from 'react-native';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={style.main}>
      <View>
        <View style={isDarkMode ? style.DarkMainCircle : style.LightMainCircle}>
          <Text
            style={
              isDarkMode ? style.DarkmainCircleText : style.LightmainCircleText
            }>
            Hello
          </Text>
          <Text
            style={
              isDarkMode ? style.DarkmainCircleText : style.LightmainCircleText
            }>
            World
          </Text>
        </View>
        <Text style={isDarkMode ? style.DarkNoteText : style.LightNoteText}>
          This Supports Light & Dark Mode
        </Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LightMainCircle: {
    backgroundColor: '#ED83AA',
    width: 300,
    height: 300,
    borderRadius: 300,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'inset -1px 10px 31px 8px rgba(0,0,0,1)',
    marginBottom: 10,
  },
  DarkMainCircle: {
    backgroundColor: '#ED83AA',
    width: 300,
    height: 300,
    borderRadius: 300,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'inset -1px 10px 31px 8px rgba(200,200,210,1)',
    marginBottom: 10,
  },
  LightmainCircleText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'black',
  },
  DarkmainCircleText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
  },
  LightNoteText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
  },
  DarkNoteText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white',
  },
});
