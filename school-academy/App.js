import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Navbar from './src/components/Navbar/Navbar';

import HomeSection from './src/sections/HomeSection/HomeSection';
import AcademicsSection from './src/sections/AcademicsSection/AcademicsSection';
import AdmissionSection from './src/sections/AdmissionSection/AdmissionSection';
import BlogSection from './src/sections/BlogSection/BlogSection';
import TeachersSection from './src/sections/TeachersSection/TeachersSection';
import MissionSection from './src/sections/MissionSection/MissionSection';

import { colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <HomeSection />
        <AcademicsSection />
        <AdmissionSection />
        <BlogSection />
        <TeachersSection />
        <MissionSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});