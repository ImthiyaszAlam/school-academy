import React from 'react';
import { View, Text } from 'react-native';
import DepartmentCard from './components/DepartmentCard/DepartmentCard';
import styles from './DepartmentSection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';

const departments = [
  {
    icon: 'flask',
    iconLib: 'Ionicons',
    title: 'Science',
    paragraph: 'Explore the wonders of science with our modern labs and expert faculty.',
  },
  {
    icon: 'calculator',
    iconLib: 'Ionicons',
    title: 'Mathematics',
    paragraph: 'Dive into the world of numbers and logic with our comprehensive curriculum.',
  },
  {
    icon: 'color-palette',
    iconLib: 'Ionicons',
    title: 'Arts',
    paragraph: 'Unleash your creativity in our vibrant arts department.',
  },
  {
    icon: 'football',
    iconLib: 'Ionicons',
    title: 'Sports',
    paragraph: 'Achieve excellence in sports with our top-notch facilities and coaching.',
  },
];

const DepartmentSection = () => {
  return (
    <View style={styles.container}>
      <SectionTopBar
        title="Departments"
        heading="Our Academic Departments"
        subTitle="Explore the variety of disciplines we offer."
        align="center"
      />
      <View style={styles.cardsRow}>
        {departments.map((dept, idx) => (
          <DepartmentCard
            key={dept.title}
            icon={dept.icon}
            iconLib={dept.iconLib}
            title={dept.title}
            paragraph={dept.paragraph}
            buttonText="Read More"
          />
        ))}
      </View>
    </View>
  );
};

export default DepartmentSection;
