import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './SectionSubTitle.styles';

const SectionSubTitle = ({ subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subtitle}</Text>
    </View>
  );
};

export default SectionSubTitle;
