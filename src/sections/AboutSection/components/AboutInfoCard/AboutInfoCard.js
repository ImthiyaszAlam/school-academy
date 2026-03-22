import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './AboutInfoCard.styles';

const AboutInfoCard = ({ icon, title, subtitle }) => (
  <View style={styles.aboutInfoCard}>
    <View style={styles.aboutInfoCardLeft}>
      <FontAwesomeIcon icon={icon} size={32} style={styles.aboutInfoCardIcon} accessibilityLabel="About info icon" />
    </View>
    <View style={styles.aboutInfoCardRight}>
      <Text style={styles.aboutInfoCardTitle}>{title}</Text>
      <Text style={styles.aboutInfoCardSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

export default AboutInfoCard;
