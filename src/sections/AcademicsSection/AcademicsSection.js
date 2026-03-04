import React from 'react';


import AcademicCard from './components/AcademicCard/AcademicCard';
import { View, Text } from 'react-native-web';
import styles from './AcademicsSection.styles';
import { spacing, layout } from '../../theme';

const AcademicsSection = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Academics</Text>
      <Text style={styles.subtitle}>Explore our academic programs and curriculum designed for excellence.</Text>
      <View style={{ flexDirection: 'row', width: '100%', marginTop: spacing.lg }}>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <AcademicCard
            image={null}
            totalClasses={12}
            rating={4.5}
            title="Science Stream"
            description="Science stream with modern labs and experienced faculty."
            totalSeats={30}
            period="1 Year"
            fees="$500"
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <AcademicCard
            image={null}
            totalClasses={10}
            rating={4.2}
            title="Science Stream"
            description="Commerce stream with practical exposure and projects."
            totalSeats={25}
            period="1 Year"
            fees="$450"
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <AcademicCard
            image={null}
            totalClasses={8}
            rating={4.8}
            title="Science Stream"
            description="Arts stream with creative curriculum and workshops."
            totalSeats={20}
            period="1 Year"
            fees="$400"
          />
        </View>
      </View>
    </View>
  );
};

export default AcademicsSection;
