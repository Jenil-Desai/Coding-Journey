import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

interface HeadingTextProps {
  text: string;
}

export default function HeadingTexts({text}: HeadingTextProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const TextColor = {
    color: isDarkMode ? 'white' : 'black',
  };
  return (
    <>
      <Text style={[styles.headingText, TextColor]}>{text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});
