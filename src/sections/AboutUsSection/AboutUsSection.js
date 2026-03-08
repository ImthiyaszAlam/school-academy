import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';

const AboutUsSection = () => {
  return (
    <View style={styles.container}>
      <SectionTopBar title="About Us" heading='about_us' subTitle='lore' />
      
    </View>
  );
};


export default AboutUsSection;
