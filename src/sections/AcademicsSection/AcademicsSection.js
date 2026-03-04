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
            image={"https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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
            title="Commerce Stream"
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
            title="Arts Stream"
            description="Arts stream with creative curriculum and workshops."
            totalSeats={20}
            period="1 Year"
            fees="$400"
          />
        </View>
      </View>

      {/* Second row of cards */}
      <View style={{ flexDirection: 'row', width: '100%', marginTop: spacing.lg }}>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <AcademicCard
            image={"https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D"}
            totalClasses={9}
            rating={4.3}
            title="Mathematics Stream"
            description="Mathematics stream with advanced problem-solving sessions."
            totalSeats={22}
            period="1 Year"
            fees="$420"
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <AcademicCard
            image={null}
            totalClasses={11}
            rating={4.6}
            title="Computer Science"
            description="Computer Science stream with coding bootcamps and projects."
            totalSeats={28}
            period="1 Year"
            fees="$480"
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <AcademicCard
            image={null}
            totalClasses={7}
            rating={4.1}
            title="Humanities"
            description='loreum ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut'
            totalSeats={18}
            period="1 Year"
            fees="$390"
          />
        </View>
      </View>
    </View>
  );
};

export default AcademicsSection;
