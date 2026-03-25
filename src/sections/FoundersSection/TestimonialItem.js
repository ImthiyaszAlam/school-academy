import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './FoundersSection.styles';

const TestimonialItem = ({ item, width }) => {
  return (
    <View style={[styles.slide, { width }]}> 
      <View style={styles.contentWrapper}>
        <View style={styles.left}>
          <Text style={styles.quote} numberOfLines={6}>
            “{item.quote}”
          </Text>
        </View>

        <View style={styles.right}>
          <Image source={{ uri: item.image }} style={styles.avatar} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(TestimonialItem);
