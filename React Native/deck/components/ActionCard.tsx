import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeadingTexts from './HeadingTexts';

export default function ActionCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }

  return (
    <View>
      <HeadingTexts text="Action Card" />
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Jenil Desai</Text>
        </View>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/126967976?v=4',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDetails}>
            👋 Hi, I'm Jenil Desai, an aspiring Computer Engineer currently
            pursuing a BSc in Information Technology at Atmiya University. I'm
            deeply passionate about Software Development and dedicated to
            academic excellence.
          </Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() => openWebsite('https://github.com/jenil-desai')}
              style={styles.profileLinks}>
              <Text>GitHub Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://linkedin.com/in/desaijenil')}
              style={styles.profileLinks}>
              <Text>LinkedIn Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    elevation: 3,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  cardBody: {
    padding: 10,
  },
  cardDetails: {
    textAlign: 'justify',
  },
  cardFooter: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  profileLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#bde0fe',
    borderColor: '#a2d2ff',
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
  },
});
