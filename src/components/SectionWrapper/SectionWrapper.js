import React from 'react';
import { View } from 'react-native';
import styles from './SectionWrapper.styles';

const SectionWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SectionWrapper;