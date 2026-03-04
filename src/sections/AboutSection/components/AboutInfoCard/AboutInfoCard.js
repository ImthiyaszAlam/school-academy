import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './AboutInfoCard.styles';

const AboutInfoCard = ({ icon, title, subtitle }) => (
  <View style={styles.aboutInfoCard}>
    <View style={styles.aboutInfoCardLeft}>
      <Image
        source={icon}
        style={styles.aboutInfoCardIcon}
        resizeMode="contain"
        accessible
        accessibilityLabel="About info icon"
      />
    </View>
    <View style={styles.aboutInfoCardRight}>
      <Text style={styles.aboutInfoCardTitle}>{title}</Text>
      <Text style={styles.aboutInfoCardSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

export default AboutInfoCard;
