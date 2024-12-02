import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeadingTexts from './HeadingTexts';

export default function FlatCard() {
  return (
    <View>
      <HeadingTexts text="Flat Cards" />
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Cyan</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Violet</Text>
        </View>
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
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50BDD4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
