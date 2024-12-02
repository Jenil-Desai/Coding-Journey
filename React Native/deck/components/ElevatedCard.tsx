import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeadingTexts from './HeadingTexts';
import {technologies} from '../data/technologies';

export default function ElevatedCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }

  return (
    <View>
      <HeadingTexts text="Intresting Technologies" />
      <ScrollView style={styles.container} horizontal={true}>
        {technologies.map((technology, idx) => (
          <TouchableOpacity
            onPress={() => openWebsite(technology.websiteUrl)}
            style={styles.card}
            key={idx}>
            <Text style={styles.cardText}>{technology.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    backgroundColor: '#7764e4',
    elevation: 4,
  },
  cardText: {
    color: '#fff',
    fontWeight: 300,
  },
});
