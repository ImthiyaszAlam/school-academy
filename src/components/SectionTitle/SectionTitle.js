import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './SectionTitle.styles';


const SectionTitle = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'flex-start'}}>
        <View style={styles.container}>
          <MaterialIcons name="star" size={16} style={styles.icon} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.underline} />
      </View>
    </View>
  );
};

export default SectionTitle;
