import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {projects} from '../data/projects';
import HeadingTexts from './HeadingTexts';

export default function ProjectList() {
  return (
    <View>
      <HeadingTexts text="Projects List" />
      <ScrollView style={styles.container} scrollEnabled={false}>
        {projects.map(project => (
          <View
            key={project.uid}
            style={
              project.uid % 2 == 1
                ? styles.EvenProjectCard
                : styles.OddProjectCard
            }>
            <Image
              source={{
                uri:
                  project.imageUrl == ''
                    ? `https://placehold.co/60/000/fff@3x.png?text=${project.name}&font=raleway`
                    : project.imageUrl,
              }}
              style={styles.projectsImage}
            />
            <View>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDesc}>{project.shortDescription}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  EvenProjectCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 10,
  },
  OddProjectCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#fcd36a',
    padding: 4,
    borderRadius: 10,
  },
  projectsImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  projectName: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
  },
  projectDesc: {
    fontSize: 12,
    color: '#000',
  },
});
