import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native';
import React from 'react';
import HeadingTexts from './HeadingTexts';
import {bestProjects} from '../data/bestProjects';

export default function FlatCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }

  return (
    <View>
      <HeadingTexts text="Best Projects" />
      <View style={styles.container}>
        {bestProjects.map((bestProject, idx) => (
          <TouchableHighlight
            onPress={() => openWebsite(bestProject.websiteUrl)}
            style={styles.card}
            key={idx}>
            <Text style={styles.cardText}>{bestProject.name}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  },
  cardText: {
    color: '#fff',
    fontWeight: 300,
  },
});
