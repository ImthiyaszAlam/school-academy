import React from 'react';
import { View, Text } from 'react-native';
import TeacherCard from './components/TeacherCard/TeacherCard';
import styles from './TeachersSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const TeachersSection = () => {
  // Example teacher data
  const teachers = [
    {
      name: 'John Doe',
      designation: 'Mathematics Teacher',
   image: { uri: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" },
   
    },
    {
      name: 'John Doe',
      designation: 'Mathematics Teacher',
   image: { uri: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" },
   
    },
  
    {
      name: 'Jane Smith',
      designation: 'Science Teacher',
      image: { uri: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" },
    },
    {
      name: 'Emily Johnson',
      designation: 'English Teacher',  
       image: { uri: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" },
   
    },
    {
      name: 'Michael Brown',
      designation: 'History Teacher',
         image: { uri: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" },
   
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teachers</Text>
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
