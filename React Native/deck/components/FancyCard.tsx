import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingTexts from './HeadingTexts';

export default function FancyCard() {
  return (
    <View>
      <HeadingTexts text="Fancy Cards" />
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1733036016861-0541eb76dac5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Window</Text>
            <Text style={styles.cardLabel}>India</Text>
          </View>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            eleifend auctor ipsum. Ut ultricies sodales lorem, non maximus mi
            placerat eu. Aenean lacinia, orci id volutpat fringilla, est risus
            scelerisque nulla, vel porta eros felis at turpis.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 360,
    width: 320,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 16,
    flexShrink: 1,
    textAlign: 'justify',
  },
});
