import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import styles from './AboutSection.styles';


// Use the same favicon as AcademicsSection
const ABOUT_ICON = require('../../../assets/favicon.png'); // Adjust path if needed

//const ABOUT_IMAGE = require('../../../assets/about-image.jpg'); // Replace with your image path
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Replace with your image path

const AboutSection = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <SectionWrapper style={styles.sectionContainer}>
      <View style={[styles.contentContainer, isMobile && styles.contentContainerMobile]}>
        <View style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
          <Image
            source={ABOUT_IMAGE}
            style={[styles.image, isMobile && styles.imageMobile]}
            resizeMode="cover"
            accessible
            accessibilityLabel="About our school"
          />
        </View>
        <View style={[styles.textContainer, isMobile && styles.textContainerMobile]}>
          <View style={styles.titleRow}>
            <Image
              source={ABOUT_ICON}
              style={styles.titleIcon}
              resizeMode="contain"
              accessible
              accessibilityLabel="About icon"
            />
            <Text style={styles.title}>About </Text>
          </View>
          <Text style={styles.paragraph}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          </Text>
        </View>
      </View>
    </SectionWrapper>
  );
};

export default AboutSection;
