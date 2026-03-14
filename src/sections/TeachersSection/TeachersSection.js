
import React from 'react';
import { View, Text } from 'react-native';
import TeacherCard from './components/TeacherCard/TeacherCard';
import styles from './TeachersSection.styles';
import { colors, spacing, typography, layout } from '../../theme';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { teachers } from '../../content/teachersData';

const TeachersSection = () => {
  // ...existing code...

  return (
    <View style={styles.container}>
      <SectionTopBar
        title="Our Teachers"
        heading="Meet Our Expert Faculty"
        subTitle="Dedicated educators guiding every student."
        align="center"
      />
      <View style={styles.row}>
        {teachers.map((teacher, idx) => (
          <View style={styles.cardWrapper} key={idx}>
            <TeacherCard {...teacher} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default TeachersSection;
