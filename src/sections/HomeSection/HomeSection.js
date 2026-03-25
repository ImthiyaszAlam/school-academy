import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../../components/util/AppButton';
import styles from './HomeSection.styles';
import { colors, spacing, typography, layout } from '../../theme';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';

const HomeSection = () => {
  return (
    <ImageBackground
      source={{ uri: "https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      style={styles.background}
      resizeMode="cover"
    >



      <View style={styles.overlay}>

  
        <Text style={styles.heading}>Start your beautiful journey</Text>
        <Text style={styles.subheading}>with Edureka</Text>
        <Text style={styles.paragraph}>
          Discover a world of opportunities and knowledge. Join us to unlock your potential and achieve your dreams with our expert guidance and resources.
        </Text>
        <View style={styles.buttonRow}>
          <Button title="About More" style={styles.button} textStyle={styles.buttonText} onPress={() => { }} />
          <Button title="Learn More" style={[styles.button, styles.buttonSecondary]} textStyle={styles.buttonText} onPress={() => { }} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeSection;
