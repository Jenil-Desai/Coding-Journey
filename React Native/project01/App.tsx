import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Image,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={style.main}>
      <View>
        <View style={style.mainCircle}>
          <Text style={style.mainCircleText}>Hello</Text>
          <Text style={style.mainCircleText}>World</Text>
        </View>
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
  mainCircle: {
    backgroundColor: '#ED83AA',
    width: 300,
    height: 300,
    borderRadius: 300,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'inset -1px 10px 31px 8px rgba(200,200,210,1)',
    marginBottom: 10,
  },
  mainCircleText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
  },
});
