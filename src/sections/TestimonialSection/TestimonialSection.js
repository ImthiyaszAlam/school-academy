
import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './TestimonialSection.style';
import TestimonialCard from './components/TestimonialCard/TestimonialCard';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';

const testimonials = [
    {
        text: 'This academy has changed my life! The teachers are amazing and the environment is so supportive.',
        image: require('../../../assets/android-icon-background.png'),
        name: 'Alice Johnson',
        role: 'Student',
    },
    {
        text: 'I love the curriculum and the friends I made here. Highly recommended!',
        image: require('../../../assets/android-icon-foreground.png'),
        name: 'Brian Lee',
        role: 'Student',
    },
    {
        text: 'The best place to learn and grow. The staff truly care about every student.',
        image: require('../../../assets/android-icon-monochrome.png'),
        name: 'Catherine Smith',
        role: 'Student',
    },
    {
        text: 'A wonderful experience from start to finish. I learned so much!',
        image: require('../../../assets/favicon.png'),
        name: 'David Kim',
        role: 'Student',
    },
    {
        text: 'As a teacher, I am proud to be part of this academy. The students are inspiring!',
        image: require('../../../assets/icon.png'),
        name: 'Emily Brown',
        role: 'Teacher',
    },
    {
        text: 'The resources and support for teachers are top-notch. Great place to work.',
        image: require('../../../assets/splash-icon.png'),
        name: 'Frank Green',
        role: 'Teacher',
    },
    {
        text: 'I have seen so much growth in my students. The academy fosters real learning.',
        image: require('../../../assets/android-icon-background.png'),
        name: 'Grace Lee',
        role: 'Teacher',
    },
    {
        text: 'The community here is like a family. I am grateful to be a part of it.',
        image: require('../../../assets/android-icon-foreground.png'),
        name: 'Henry Adams',
        role: 'Teacher',
    },
];

const TestimonialSection = () => {
    return (
        <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} // Change to your preferred background image
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SectionTopBar title="Testimonials" heading="What Our Students and Teachers Say" subTitle="Hear from our students and teachers about their experiences at our academy. Their stories highlight the supportive environment, engaging curriculum, and the sense of community that makes our academy special." align="center" />
                <View style={{ flexDirection: 'column' }}>
                    {[0, 1].map(row => (
                        <View key={row} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                            {testimonials.slice(row * 4, row * 4 + 4).map((item, idx) => (
                                <TestimonialCard
                                    key={item.name}
                                    text={item.text}
                                    image={item.image}
                                    name={item.name}
                                    role={item.role}
                                />
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
};

export default TestimonialSection;